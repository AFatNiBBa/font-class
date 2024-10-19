
import { Icon } from "../../index";

/**
 * A component that renders the `spider` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spider?s=thin spider}
 * @preview ![spider](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzcyLjQgLjhjLTQgMi01LjYgNi44LTMuNiAxMC43bDQ2LjQgOTIuOGM0LjQgOC43IDMgMTkuMi0zLjQgMjYuNUwzMjggMjI2LjdsMC04Mi43YzAtMjcuNC0xNS4zLTUxLjItMzcuOS02My40Yy0xLjktMS00LjEtMS4yLTYuMS0uNnMtMy43IDItNC43IDMuOUwyNTYgMTI3LjEgMjMyLjcgODMuOGMtMS0xLjktMi43LTMuMy00LjctMy45cy00LjItLjQtNi4xIC42QzE5OS4zIDkyLjcgMTg0IDExNi42IDE4NCAxNDRsMCA4Mi43LTgzLjgtOTUuOGMtNi40LTcuMy03LjgtMTcuOC0zLjQtMjYuNWw0Ni40LTkyLjhjMi00IC40LTguOC0zLjYtMTAuN3MtOC44LS40LTEwLjcgMy42TDgyLjUgOTcuMmMtNy4zIDE0LjUtNSAzMiA1LjcgNDQuMmw4My4xIDk0LjlMNTAuOCAyMDQuN2MtNy44LTIuMS0xNC4xLTcuOS0xNi43LTE1LjZMMTUuNiAxMzMuNWMtMS40LTQuMi01LjktNi41LTEwLjEtNS4xcy02LjUgNS45LTUuMSAxMC4xbDE4LjUgNTUuNmM0LjMgMTIuOCAxNC43IDIyLjYgMjcuOCAyNkwxNjcuOCAyNTIgNDYuNyAyODMuOWMtMTMuMSAzLjQtMjMuNSAxMy4yLTI3LjggMjZMLjQgMzY1LjVjLTEuNCA0LjIgLjkgOC43IDUuMSAxMC4xczguNy0uOSAxMC4xLTUuMUwzNC4xIDMxNWMyLjYtNy43IDguOC0xMy42IDE2LjctMTUuNmwxMDMuMS0yNy4xTDgzLjcgMzY1LjhjLTcuOSAxMC41LTEwLjEgMjQuMi01LjkgMzYuNmwzNC43IDEwNC4xYzEuNCA0LjIgNS45IDYuNSAxMC4xIDUuMXM2LjUtNS45IDUuMS0xMC4xTDkyLjkgMzk3LjRjLTIuNS03LjUtMS4yLTE1LjcgMy42LTIybDUwLjItNjYuOWMtMS43IDcuNS0yLjYgMTUuMy0yLjYgMjMuM2wwIDguM0MxNDQgNDAwIDE5NC41IDQ0OCAyNTYgNDQ4czExMi00OCAxMTItMTA3LjhsMC04LjNjMC04LS45LTE1LjgtMi42LTIzLjNsNTAuMiA2Ni45YzQuNyA2LjMgNi4xIDE0LjUgMy42IDIyTDM4NC40IDUwMS41Yy0xLjQgNC4yIC45IDguNyA1LjEgMTAuMXM4LjctLjkgMTAuMS01LjFsMzQuNy0xMDQuMWM0LjItMTIuNSAxLjktMjYuMS01LjktMzYuNmwtNzAuMi05My42IDEwMy4xIDI3LjFjNy44IDIuMSAxNC4xIDcuOSAxNi43IDE1LjZsMTguNSA1NS42YzEuNCA0LjIgNS45IDYuNSAxMC4xIDUuMXM2LjUtNS45IDUuMS0xMC4xbC0xOC41LTU1LjZjLTQuMy0xMi44LTE0LjctMjIuNi0yNy44LTI2TDM0NC4yIDI1MmwxMjEuMS0zMS45YzEzLjEtMy40IDIzLjUtMTMuMiAyNy44LTI2bDE4LjUtNTUuNmMxLjQtNC4yLS45LTguNy01LjEtMTAuMXMtOC43IC45LTEwLjEgNS4xTDQ3Ny45IDE4OWMtMi42IDcuNy04LjggMTMuNi0xNi43IDE1LjZMMzQwLjggMjM2LjRsODMuMS05NC45YzEwLjctMTIuMiAxMi45LTI5LjcgNS43LTQ0LjJMMzgzLjIgNC40Yy0yLTQtNi44LTUuNi0xMC43LTMuNnpNMjIyLjcgOTlMMjQ5IDE0Ny44YzEuNCAyLjYgNC4xIDQuMiA3IDQuMnM1LjYtMS42IDctNC4yTDI4OS4zIDk5YzEzLjggMTAuMiAyMi43IDI2LjYgMjIuNyA0NWwwIDEwOS4xYzAgMi41IDEuMiA0LjkgMy4yIDYuNGMyMi41IDE2LjkgMzYuOCA0MyAzNi44IDcyLjNsMCA4LjNjMCA1MC40LTQyLjcgOTEuOC05NiA5MS44cy05Ni00MS40LTk2LTkxLjhsMC04LjNjMC0yOS4zIDE0LjMtNTUuNCAzNi44LTcyLjNjMi0xLjUgMy4yLTMuOSAzLjItNi40TDIwMCAxNDRjMC0xOC40IDguOS0zNC44IDIyLjctNDV6Ii8+PC9zdmc+|width=32|height=32)
 */
const Spider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M372.4 .8c-4 2-5.6 6.8-3.6 10.7l46.4 92.8c4.4 8.7 3 19.2-3.4 26.5L328 226.7l0-82.7c0-27.4-15.3-51.2-37.9-63.4c-1.9-1-4.1-1.2-6.1-.6s-3.7 2-4.7 3.9L256 127.1 232.7 83.8c-1-1.9-2.7-3.3-4.7-3.9s-4.2-.4-6.1 .6C199.3 92.7 184 116.6 184 144l0 82.7-83.8-95.8c-6.4-7.3-7.8-17.8-3.4-26.5l46.4-92.8c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L82.5 97.2c-7.3 14.5-5 32 5.7 44.2l83.1 94.9L50.8 204.7c-7.8-2.1-14.1-7.9-16.7-15.6L15.6 133.5c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1l18.5 55.6c4.3 12.8 14.7 22.6 27.8 26L167.8 252 46.7 283.9c-13.1 3.4-23.5 13.2-27.8 26L.4 365.5c-1.4 4.2 .9 8.7 5.1 10.1s8.7-.9 10.1-5.1L34.1 315c2.6-7.7 8.8-13.6 16.7-15.6l103.1-27.1L83.7 365.8c-7.9 10.5-10.1 24.2-5.9 36.6l34.7 104.1c1.4 4.2 5.9 6.5 10.1 5.1s6.5-5.9 5.1-10.1L92.9 397.4c-2.5-7.5-1.2-15.7 3.6-22l50.2-66.9c-1.7 7.5-2.6 15.3-2.6 23.3l0 8.3C144 400 194.5 448 256 448s112-48 112-107.8l0-8.3c0-8-.9-15.8-2.6-23.3l50.2 66.9c4.7 6.3 6.1 14.5 3.6 22L384.4 501.5c-1.4 4.2 .9 8.7 5.1 10.1s8.7-.9 10.1-5.1l34.7-104.1c4.2-12.5 1.9-26.1-5.9-36.6l-70.2-93.6 103.1 27.1c7.8 2.1 14.1 7.9 16.7 15.6l18.5 55.6c1.4 4.2 5.9 6.5 10.1 5.1s6.5-5.9 5.1-10.1l-18.5-55.6c-4.3-12.8-14.7-22.6-27.8-26L344.2 252l121.1-31.9c13.1-3.4 23.5-13.2 27.8-26l18.5-55.6c1.4-4.2-.9-8.7-5.1-10.1s-8.7 .9-10.1 5.1L477.9 189c-2.6 7.7-8.8 13.6-16.7 15.6L340.8 236.4l83.1-94.9c10.7-12.2 12.9-29.7 5.7-44.2L383.2 4.4c-2-4-6.8-5.6-10.7-3.6zM222.7 99L249 147.8c1.4 2.6 4.1 4.2 7 4.2s5.6-1.6 7-4.2L289.3 99c13.8 10.2 22.7 26.6 22.7 45l0 109.1c0 2.5 1.2 4.9 3.2 6.4c22.5 16.9 36.8 43 36.8 72.3l0 8.3c0 50.4-42.7 91.8-96 91.8s-96-41.4-96-91.8l0-8.3c0-29.3 14.3-55.4 36.8-72.3c2-1.5 3.2-3.9 3.2-6.4L200 144c0-18.4 8.9-34.8 22.7-45z" />
    </Icon>
);

export default Spider;