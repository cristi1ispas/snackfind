import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRegisterSW } from "virtual:pwa-register/react";

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
			if (typeof updateServiceWorker === 'function') {
				await updateServiceWorker(true);
			}

			const url = new URL(window.location.href);
			url.searchParams.set('reload', Date.now().toString());
			window.location.href = url.toString();
		}
	}

	const {
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegister(r){
			r && setInterval(() => {
				r.update();
			}, 60 * 60 * 1000);
		}
	});

  return(
    <>
      <md-list-item style={{marginBottom : '24px'}}>
        <md-filled-tonal-icon-button style={{position: 'relative'}} slot='start' onClick={() => {setIsRefreshDialogOpen(true); closeNavDrawer(false)}}>
          <md-icon>sync</md-icon>
					{needRefresh && <div className="iconBadge"></div>}
        </md-filled-tonal-icon-button>
        <span slot='headline'>Last Updated:</span>
        <span slot='supporting-text'>{refreshInterval()} ago</span>
      </md-list-item>

      <md-dialog
				pop-over
				id='refreshBrowser'
				className={`${needRefresh && 'green'}`}
				type="alert"
				open={isRefreshDialogOpen}
				onclose={() => setIsRefreshDialogOpen(false)}
				oncancel={() => setIsRefreshDialogOpen(false)}
			>
				<div slot="headline">
					<md-icon>{needRefresh ? 'update' : 'warning'}</md-icon>{needRefresh ? 'New content!' : 'Before refreshing...'}
				</div>
				<form id="refresh-form" slot="content" method="dialog">
					<span>This will reset cached data and apply app updates.</span>
					<span>Make sure to have a stable internet connection.</span>
				</form>
				<div slot="actions">
					<md-outlined-button onclick={() => setIsRefreshDialogOpen(false)}>Cancel</md-outlined-button>
					<md-filled-button onclick={hardRefresh}>Refresh</md-filled-button>
				</div>
			</md-dialog>
			{createPortal(
				<div id="dialogBlur" className={`${isRefreshDialogOpen && 'open'}`}></div>,
				document.body )}
    </>
  )
}

export default RefreshBrowser;