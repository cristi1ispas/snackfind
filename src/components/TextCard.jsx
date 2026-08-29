import { useState } from "react";

function TextCard({ supportingText, headline, icon }) {

  return(
    <div className="text-card">
      <span className="supporting-text">{supportingText}</span>
      { icon 
        ? (<div className="has-icon">
            {icon}
            <span className="headline">{headline}</span>
          </div>) 
        : (<span className="headline">{headline}</span>)
      }
    </div>
  )
}

export default TextCard