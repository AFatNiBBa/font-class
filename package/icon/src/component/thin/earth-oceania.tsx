
import { Icon } from "../../index";

/**
 * A component that renders the `earth-oceania` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-oceania?s=thin earth-oceania}
 * @preview ![earth-oceania](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YTI0MCAyNDAgMCAxIDEgMCA0ODAgMjQwIDI0MCAwIDEgMSAwLTQ4MHptMCA0OTZBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0xNC43LTI5NS44Yy0yLjUtLjYtNS4yIDAtNy4xIDEuN2wtMjUuMiAyMS41Yy0zLjggMy4yLTguOCA0LjUtMTMuNiAzLjVsLS4zLS4xYy0xLjktLjQtMy42LTEuNS00LjgtM2wtNC01LjNjLTguNy0xMS42LTIyLjQtMTguNS0zNy0xOC41cy0yOC4zIDYuOC0zNyAxOC41bC01LjMgN2MtLjggMS0xLjggMS45LTMgMi40TDk4LjIgMjYwLjdjLTI0LjYgMTEuNy0zNC42IDQxLjUtMjEuOSA2NS43bDMuMyA2LjJjMTAuOCAyMC42IDM0LjggMzAuNCA1NyAyMy40bDIyLjktNy4zIDQ5LjMgMTcgMjcuOCAxOGM4LjMgNS40IDE4LjEgOC4yIDI4IDguMmMxNS45IDAgMzAuOS03LjMgNDAuNy0xOS44bDEyLjEtMTUuNGM2LjktOC44IDEwLjctMTkuNyAxMC43LTMwLjlzLTMuOC0yMi4xLTEwLjctMzAuOWwtMTcuOS0yMi45Yy00LjMtNS41LTcuOC0xMS42LTEwLjMtMTguMWwtMTIuOC0zMi43Yy0uOS0yLjQtMy00LjItNS41LTQuOHpNMTc4LjcgMjMyYzkuNSAwIDE4LjUgNC41IDI0LjIgMTIuMWw0IDUuM2MzLjUgNC43IDguNiA3LjkgMTQuNCA5LjFsLjMgLjFjOS43IDIgMTkuNy0uNiAyNy4yLTdsMTYuNy0xNC4yIDguNyAyMi4zYzMuMSA4IDcuNCAxNS40IDEyLjYgMjIuMmwxNy45IDIyLjljNC43IDYgNy4zIDEzLjQgNy4zIDIxLjFzLTIuNiAxNS4xLTcuMyAyMS4xbC0xMi4xIDE1LjRjLTYuOCA4LjYtMTcuMSAxMy43LTI4LjEgMTMuN2MtNi45IDAtMTMuNi0yLTE5LjMtNS43bC0yOC43LTE4LjVjLS41LS4zLTEuMS0uNi0xLjctLjhsLTUyLjctMTguMmMtMS42LS42LTMuNC0uNi01LS4xbC0yNS40IDguMWMtMTQuOCA0LjctMzAuOC0xLjktMzgtMTUuNmwtMy4zLTYuMmMtOC41LTE2LjEtMS44LTM2IDE0LjYtNDMuOGwzNS4zLTE2LjhjMy41LTEuNyA2LjYtNC4yIDguOS03LjNsNS4zLTdjNS43LTcuNiAxNC43LTEyLjEgMjQuMi0xMi4xem05NS4xLTg5LjVjLTkuNS05LjUtMjMtMTMuNi0zNi4xLTEwLjlsLTM4LjUgNy43Yy0xNS4zIDMuMS0xNy42IDI0LTMuNCAzMC4zbDQyLjggMTljNS4xIDIuMyAxMC42IDMuNCAxNi4yIDMuNGwyOS45IDBjMTQuMyAwIDIxLjQtMTcuMiAxMS4zLTI3LjNsLTIyLjItMjIuMnptLTMzIDQuOGM3LjktMS42IDE2IC45IDIxLjcgNi42TDI4NC43IDE3NmwtMjkuOSAwYy0zLjQgMC02LjctLjctOS43LTIuMWwtNDIuOC0xOSAzOC41LTcuN3pNMjU2IDQzMmMwIDQuNCAzLjYgOCA4IDhsMTYgMGM0LjQgMCA4LTMuNiA4LThzLTMuNi04LTgtOGwtMTYgMGMtNC40IDAtOCAzLjYtOCA4ek00MjMuNiAzMDkuNWMtMS40LTQuMi01LjktNi41LTEwLjEtNS4xcy02LjUgNS45LTUuMSAxMC4xbDggMjRjMS40IDQuMiA1LjkgNi41IDEwLjEgNS4xczYuNS01LjkgNS4xLTEwLjFsLTgtMjR6TTM3My43IDQxMy43bDMyLTMyYzMuMS0zLjEgMy4xLTguMiAwLTExLjNzLTguMi0zLjEtMTEuMyAwbC0zMiAzMmMtMy4xIDMuMS0zLjEgOC4yIDAgMTEuM3M4LjIgMy4xIDExLjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const EarthOceania: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.7-295.8c-2.5-.6-5.2 0-7.1 1.7l-25.2 21.5c-3.8 3.2-8.8 4.5-13.6 3.5l-.3-.1c-1.9-.4-3.6-1.5-4.8-3l-4-5.3c-8.7-11.6-22.4-18.5-37-18.5s-28.3 6.8-37 18.5l-5.3 7c-.8 1-1.8 1.9-3 2.4L98.2 260.7c-24.6 11.7-34.6 41.5-21.9 65.7l3.3 6.2c10.8 20.6 34.8 30.4 57 23.4l22.9-7.3 49.3 17 27.8 18c8.3 5.4 18.1 8.2 28 8.2c15.9 0 30.9-7.3 40.7-19.8l12.1-15.4c6.9-8.8 10.7-19.7 10.7-30.9s-3.8-22.1-10.7-30.9l-17.9-22.9c-4.3-5.5-7.8-11.6-10.3-18.1l-12.8-32.7c-.9-2.4-3-4.2-5.5-4.8zM178.7 232c9.5 0 18.5 4.5 24.2 12.1l4 5.3c3.5 4.7 8.6 7.9 14.4 9.1l.3 .1c9.7 2 19.7-.6 27.2-7l16.7-14.2 8.7 22.3c3.1 8 7.4 15.4 12.6 22.2l17.9 22.9c4.7 6 7.3 13.4 7.3 21.1s-2.6 15.1-7.3 21.1l-12.1 15.4c-6.8 8.6-17.1 13.7-28.1 13.7c-6.9 0-13.6-2-19.3-5.7l-28.7-18.5c-.5-.3-1.1-.6-1.7-.8l-52.7-18.2c-1.6-.6-3.4-.6-5-.1l-25.4 8.1c-14.8 4.7-30.8-1.9-38-15.6l-3.3-6.2c-8.5-16.1-1.8-36 14.6-43.8l35.3-16.8c3.5-1.7 6.6-4.2 8.9-7.3l5.3-7c5.7-7.6 14.7-12.1 24.2-12.1zm95.1-89.5c-9.5-9.5-23-13.6-36.1-10.9l-38.5 7.7c-15.3 3.1-17.6 24-3.4 30.3l42.8 19c5.1 2.3 10.6 3.4 16.2 3.4l29.9 0c14.3 0 21.4-17.2 11.3-27.3l-22.2-22.2zm-33 4.8c7.9-1.6 16 .9 21.7 6.6L284.7 176l-29.9 0c-3.4 0-6.7-.7-9.7-2.1l-42.8-19 38.5-7.7zM256 432c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8zM423.6 309.5c-1.4-4.2-5.9-6.5-10.1-5.1s-6.5 5.9-5.1 10.1l8 24c1.4 4.2 5.9 6.5 10.1 5.1s6.5-5.9 5.1-10.1l-8-24zM373.7 413.7l32-32c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-32 32c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z" />
    </Icon>
);

export default EarthOceania;