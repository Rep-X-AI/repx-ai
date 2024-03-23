// eslint-disable-next-line

import React from 'react'

// eslint-disable-next-line
import usePwa from "use-pwa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const InstallButton = () => {
  
  const { appinstalled, canInstallprompt, isLoading, showInstallPrompt } =
    usePwa();
  
  if (!canInstallprompt || appinstalled || isLoading) return null;

  return (
    
    <button onClick={showInstallPrompt}
      className="hero-button-gradient inline-flex gap-2 rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
      Install <FontAwesomeIcon icon={faDownload} className='pt-1' />
    </button>
  )
}

export default InstallButton