

const dropdownMenuTrigger = document.getElementById("dropdown-menu-trigger")

const toggleMenu = (clickEvent) => {
  const mainScreen = document.getElementById("main-screen")
  const navbar = document.getElementById("navbar")
  const homePageLink = document.getElementById("home-page-link")
  const dropdownMenuContainer = document.getElementById("dropdown-menu-container")
  const navbarLinkList = document.getElementById("navbar-links-list")
  const dropdownTriggerBars = document.querySelectorAll(".dropdown-trigger__bar")
  const hero = document.getElementById("hero")
  const mainSection = document.getElementById("main")
  const footerSection = document.getElementById("footer")
  
  const isOpen = navbarLinkList.classList.contains("navbar-links-list--dropdown-open")
  
  if(isOpen) {
    mainScreen.classList.remove("main-screen--dropdown-menu-open")
    navbar.classList.remove("navbar--dropdown-menu-open")
    homePageLink.classList.remove("navbar__home-page-link--dropdown-menu-open")
    dropdownMenuContainer.classList.remove("dropdown-container--menu-open")
    navbarLinkList.classList.remove("navbar-links-list--dropdown-open")
    dropdownTriggerBars.forEach((triggerBar) => triggerBar.classList.remove("dropdown-trigger__bar--dropdown-open"))
    hero.classList.remove("hero--dropdown-menu-open")
    mainSection.classList.remove("main--dropdown-menu-open")
    footerSection.classList.remove("footer--dropdown-menu-open")
  } else {
    mainScreen.classList.add("main-screen--dropdown-menu-open")
    navbar.classList.add("navbar--dropdown-menu-open")
    dropdownMenuContainer.classList.add("dropdown-container--menu-open")
    homePageLink.classList.add("navbar__home-page-link--dropdown-menu-open")
    navbarLinkList.classList.add("navbar-links-list--dropdown-open")
    dropdownTriggerBars.forEach((triggerBar) => triggerBar.classList.add("dropdown-trigger__bar--dropdown-open"))
    hero.classList.add("hero--dropdown-menu-open")
    mainSection.classList.add("main--dropdown-menu-open")
    footerSection.classList.add("footer--dropdown-menu-open")
  }
}

dropdownMenuTrigger.addEventListener("click", toggleMenu)