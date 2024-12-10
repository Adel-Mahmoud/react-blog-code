export const toggleSidebar = () => {
    const layoutWrapper = document.querySelector('html');
    if (layoutWrapper) {
      layoutWrapper.classList.toggle('layout-menu-expanded');
    }
  };
  
  export const isSmallScreen = () => {
    return window.innerWidth <= 768;
  };
  