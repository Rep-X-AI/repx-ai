import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


const InstallButton = () => {

  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }

  return (
    <button onClick={onClick} id="setup_button"
      aria-label="Install app"
      title="Install app" className={`hero-button-gradient inline-flex gap-2 rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80`}>
      Install <FontAwesomeIcon icon={faDownload} className='pt-1' />
    </button>
  );
}

export default InstallButton