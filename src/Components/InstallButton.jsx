import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { usePwa } from '@dotmind/react-use-pwa';


const InstallButton = () => {
  const {
    installPrompt,
    isInstalled,
    canInstall,
  } = usePwa();

  if (!canInstall || isInstalled) {
    return null;
  }

  return (
    <button onClick={installPrompt} className={`hero-button-gradient inline-flex gap-2 rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80 ${isInstalled ? "hidden" : ""}`}>
      Install <FontAwesomeIcon icon={faDownload} className='pt-1' />
    </button>
  );
}

export default InstallButton