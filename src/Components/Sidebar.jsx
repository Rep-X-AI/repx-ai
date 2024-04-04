import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Sidebar = ({ role }) => {
  const location = useLocation();

  const { currentUser, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(false);
  };
  const history = useNavigate();
  async function handleLogout() {
    try {
      await logout();
      history("/");
    } catch {
      console.log("Failed to logout");
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      setIsOpen(false);
      setIsMenuOpen(false);
    };
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm rounded-lg lg:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                onClick={handleMenuToggle}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link to="/dashboard" className="flex pl-4 items-center">
                <img
                  src="/repx-logo.webp"
                  className="mr-0 h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center pt-2 text-xl font-bold tracking-wide whitespace-nowrap text-white">
                  epx AI
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user"
                    onClick={handleToggle}>
                    <span className="sr-only">Open user menu</span>
                    <img className="w-10 h-10 rounded-full" src={currentUser.photoURL} loading="lazy" alt="" />
                  </button>
                </div>
                {isOpen &&
                  <div className="z-50 absolute top-12 right-1 lg:right-3 my-4 text-base list-none  divide-y rounded shadow bg-gray-700 divide-gray-600" id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm my-1 text-white" role="none">
                        {currentUser.displayName}
                      </p>
                      <p className="text-sm my-1 text-white tracking-wider" role="none">
                        {(role).toUpperCase()}
                      </p>
                      <p className="text-sm my-1 font-medium truncate text-gray-300" role="none">
                        {currentUser.email}
                      </p>
                    </div>
                    <ul className="p-4" aria-labelledby="user-menu-button">
                      <li>
                        <button
                          onClick={handleLogout}
                          className="bg-purple-500 hover:bg-purple-600 duration-75 text-white p-2 rounded-md w-full text-center"
                        >
                          Sign out
                        </button>
                      </li>
                    </ul>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className={`z-10 w-64 fixed inset-y-0 left-0 pt-[4rem] flex-shrink-0 lg:translate-x-0  bg-gray-900 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="h-full overflow-hidden px-3 pb-4 pt-6 bg-gray-800">
          <ul className="space-y-3 font-medium">
            <CustomLink to="/dashboard">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </CustomLink>

           { (role==='teacher' ) && <CustomLink to="/dashboard/create-assignment">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Create Assignment</span>
            </CustomLink>
            }

            { (role==='teacher' ) && <CustomLink to="/dashboard/evaluate">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Evaluate</span>
            </CustomLink>}

            { (role==='student' ) && <CustomLink to="/">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Join Assignment</span>
            </CustomLink>}


            <CustomLink to="/dashboard/history">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-days" className="svg-inline--fa fa-calendar-days w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg>
              <span className="ms-3">History</span>
            </CustomLink>
          </ul>
          <ul className="pt-4 mt-4 space-y-3 font-medium border-t border-gray-700">
            <CustomLink to="/dashboard/upgrade-to-pro">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
              </svg>
              <span className="ms-3">Upgrade to Pro</span>
            </CustomLink>
            <CustomLink to="/dashboard/changelog">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
              <span className="ms-3">Changelog</span>
            </CustomLink>
            <CustomLink to="/dashboard/documentation">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
              </svg>
              <span className="ms-3">Documentation</span>
            </CustomLink>
            <CustomLink to="/dashboard/support">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
              </svg>
              <span className="ms-3">Help</span>
            </CustomLink>
          </ul>
        </div>
      </aside>

    </>
  );
};


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <li>
      <Link
        to={to} {...props}
        className={isActive ? "flex items-center p-2 hero-button-gradient text-white rounded-lg group" : "flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"}
      >
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
