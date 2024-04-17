import React from 'react';
import '../styles/bottomBar.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function BottomBar() {
    return (
      <div className="bottom-bar">
        <div className="bottom-bar-option">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="bottom-bar-option">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
        <div className="bottom-bar-option">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    );
  }
  
  export default BottomBar;