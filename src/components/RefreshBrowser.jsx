import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const T_zero = Date.now();

function RefreshBrowser({ closeNavDrawer }) {
  
  const [nowTime, setNowTime] = useState(Date.now());
	const lastRefresh = (nowTime - T_zero) / 1000; // in seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setNowTime(Date.now());
		}, 20000);
		return () => clearInterval(interval);
	}, []);

	function refreshInterval() {
		if (lastRefresh < 120) {
			return `A few moments`;
		} else if (lastRefresh / 60 < 60) {
			const minutes = Math.floor(lastRefresh / 60); 
			return `${minutes} minutes`;
		} else {
			const hours = Math.floor(lastRefresh / 3600);
			return `${hours} hours`;
		}
	}

	const [isRefreshDialogOpen, setIsRefreshDialogOpen] = useState(false);
	const hardRefresh = async () => {
		try {
			if ('caches' in window) {
				const cacheNames = await caches.keys();
				await Promise.all(
					cacheNames.map(cacheName => caches.delete(cacheName))
				);
			}
			localStorage.removeItem('appDatabaseStorage');
		} catch (error) {
			console.error("Error Refreshing:", error);
		} finally {
			const url = new URL(window.location.href);
			url.searchParams.set('reload', Date.now().toString());
			window.location.href = url.toString();
		}
	}

  return(
    <>
      <md-list-item style={{marginBottom : '24px'}}>
        <md-filled-tonal-icon-button slot='start' onClick={() => {setIsRefreshDialogOpen(true); closeNavDrawer(false)}}>
          <md-icon>sync</md-icon>
        </md-filled-tonal-icon-button>
        <span slot='headline'>Last Updated:</span>
        <span slot='supporting-text'>{refreshInterval()} ago</span>
      </md-list-item>

      <md-dialog
				pop-over
				id='refreshBrowser'
				type="alert"
				open={isRefreshDialogOpen}
				onclose={() => setIsRefreshDialogOpen(false)}
				oncancel={() => setIsRefreshDialogOpen(false)}
			>
				<div slot="headline">
					<md-icon>warning</md-icon>Before refreshing...
				</div>
				<form style={{color:'var(--color-scheme-on-error-container)'}} id="refresh-form" slot="content" method="dialog">
					<span style={{ margin: '0 0 8px 0' }}>This will reset cached data and apply app updates.</span>
					<span>Make sure to have a stable internet connection.</span>
				</form>
				<div slot="actions">
					<md-outlined-button onclick={() => setIsRefreshDialogOpen(false)}>Cancel</md-outlined-button>
					<md-filled-button onClick={hardRefresh}>Refresh</md-filled-button>
				</div>
			</md-dialog>
			{createPortal(
				<div id="dialogBlur" className={`${isRefreshDialogOpen && 'open'}`}></div>,
				document.body )}
    </>
  )
}

export default RefreshBrowser;