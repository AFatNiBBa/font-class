
import { Icon } from "../../index";

/**
 * A component that renders the `truck-plane` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-plane?s=regular truck-plane}
 * @preview ![truck-plane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTgzLjMgMTguN0MxOTIuOSA4LjggMjA2LjYgMCAyMjQgMGMxNy40IDAgMzEuMiA4LjYgNDEuMSAxOC43YzkuNyA5LjkgMTcgMjIuNiAyMi40IDM0LjljNy44IDE3LjkgMTMgMzguMyAxNS4zIDU2Yy0yMy41IDE0LjEtNDAuNSAzNy45LTQ1LjMgNjUuOWMtLjktMi42LTEuNC01LjMtMS40LTguMWwwLTM5LjRjMC0xMy42LTQuMi0zNi4zLTEyLjUtNTUuMmMtNC4xLTkuNC04LjUtMTYuMy0xMi43LTIwLjZjLTQtNC4xLTYuMi00LjItNi44LTQuMmMwIDAgMCAwIDAgMGMtLjIgMC0yLjIgMC02LjMgNC4yYy00LjIgNC4zLTguNyAxMS4zLTEyLjkgMjAuN2MtOC40IDE5LTEyLjggNDEuNy0xMi44IDU1LjFsMCAzOS40YzAgNy4zLTMuMyAxNC4yLTkgMTguOEw1My43IDI4OS4zYy0uNyAuNS0xLjMgMS0yIDEuNWMtMi4zIDEuNS0zLjcgNC0zLjcgNi43bDAgMjguNyAxMTEtNDQuOGM3LjQtMyAxNS44LTIuMSAyMi40IDIuNHMxMC42IDExLjkgMTAuNiAxOS45bDAgNzIuM2MwIDcuNi0zLjYgMTQuNy05LjYgMTkuMkwxMjggNDM2bDAgMjMuOWM2LjgtMi4xIDE1LjMtNC42IDI0LjMtNy4zYzIyLjYtNi44IDQ5LjEtMTQuOCA2NC42LTE5LjZjNC42LTEuNCA5LjUtMS40IDE0LjEgMGM5LjEgMi44IDIxLjkgNi43IDM1LjUgMTAuOGM1LjQgMTAuNSAxMi43IDE5LjkgMjEuNCAyNy43bDAgMTYuNWMwIDQuNCAuNSA4LjcgMS41IDEyLjlsLTcuNi0yLjNjLTE5LjUtNS45LTQyLTEyLjYtNTcuOS0xNy41Yy0xNS45IDQuOS0zOC40IDExLjYtNTcuOSAxNy41Yy0xMS4zIDMuNC0yMS43IDYuNS0yOS4yIDguOGwtOC45IDIuNy0yLjQgLjctLjYgLjItLjIgMGMwIDAgMCAwIDAgMGMwIDAgMCAwIDAgMHMwIDAgMCAwbC02LjktMjMgNi45IDIzYy0yLjIgLjctNC41IDEtNi45IDFDOTcgNTEyIDgwIDQ5NSA4MCA0NzQuMUw4MCA0MzJjMC0xMi42IDUuOS0yNC40IDE2LTMybDQ4LTM2IDAtMjQuOEw1My45IDM3NS42Yy0uNSAuMi0xLjEgLjQtMS43IC42QzI2LjQgMzg0LjQgMCAzNjUuMiAwIDMzOC4xbDAtNDAuNmMwLTE4LjYgOS4yLTM2IDI0LjYtNDYuNEwxNDQgMTU1LjhsMC0yNy44YzAtMjAuNyA2LjEtNTAgMTYuOS03NC41YzUuNS0xMi4zIDEyLjgtMjQuOSAyMi40LTM0Ljh6TTI4OCAxOTJjMC0xNi4yIDYtMzEuMSAxNi00Mi4zYzExLjctMTMuMyAyOC45LTIxLjcgNDgtMjEuN2wyMjQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDE4NCAwIDI0YzAgMjMuNy0xMi45IDQ0LjQtMzIgNTUuNGwwIDMyLjZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0yNC0xOTIgMCAwIDEwLjEgMCAxMy45YzAgMTMuMy0xMC43IDI0LTI0IDI0Yy0yLjEgMC00LjItLjMtNi4xLS44Yy00LjktMS4zLTkuMi00LjEtMTIuMy03LjljMCAwIDAgMCAwIDBjLTMuNC00LjItNS41LTkuNS01LjUtMTUuM2wwLTI4LjEgMC00LjVjLTE1LjUtOS0yNi45LTI0LjMtMzAuNy00Mi40Yy0uOS00LjItMS4zLTguNS0xLjMtMTNsMC0yNCAwLTk0LjkgMC03Ni42IDAtMTIuNXpNNDAwIDMwNGwxMS4yIDAgNi40IDAgMTYuOCAwIDEzLjYgMCA0NS42IDAgMjMuMiAwIDI3LjIgMC0xMS45LTM3Yy0yLjUtNi41LTguNC0xMS0xNS4zLTExbC04Ny4yIDAtMTguNCAwYy02LjkgMC0xMi45IDQuNS0xNS4zIDExbC0xLjYgNS00LjQgMTMuOEwzODQgMzA0bDE2IDB6bS01MC4zLTUwLjNsLjUtMS40IC40LTEuMiAuNS0xLjJjLjItLjYgLjUtMS4yIC43LTEuOGMzLjYtOC43IDkuMi0xNi43IDE2LjMtMjMuM2MzLjUtMy4zIDcuNS02LjIgMTEuNy04LjZjOS4xLTUuMiAxOS44LTguMyAzMS41LTguM2wxMDUuNiAwYzI4LjggMCA1MS40IDE4LjcgNjAuMiA0MS45bC41IDEuMiAuNCAxLjIgMTEuOSAzNyAyLjMgNy4yTDU5MiAxOTJjMC04LjgtNy4yLTE2LTE2LTE2bC0yMjQgMGMtNS43IDAtMTAuNiAyLjktMTMuNSA3LjRjLTEuNiAyLjUtMi41IDUuNC0yLjUgOC42bDAgMjAuNSAwIDMwLjMgMCA1My43IDIuMy03LjIgMTEuNC0zNS42ek00NDUuNSAzNTJMNDIyIDM1MmwtMzggMC04IDAtMTYgMGMtNS4xIDAtOS44IDEuNi0xMy43IDQuM2MtNi4yIDQuMy0xMC4zIDExLjUtMTAuMyAxOS43bDAgMTIgMCAxMmMwIDguMyA2LjMgMTUuMSAxNC40IDE1LjljLjUgLjEgMS4xIC4xIDEuNiAuMWwxMi43IDBMNTc2IDQxNmM4LjggMCAxNi03LjIgMTYtMTZsMC0yNGMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMjQgMC05OC41IDB6TTM2OCA0MDYuNmEyNCAyNCAwIDEgMSAxNi00NS4zIDI0IDI0IDAgMSAxIC0xNiA0NS4zek01NTIgMzYwYTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TruckPlane: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M183.3 18.7C192.9 8.8 206.6 0 224 0c17.4 0 31.2 8.6 41.1 18.7c9.7 9.9 17 22.6 22.4 34.9c7.8 17.9 13 38.3 15.3 56c-23.5 14.1-40.5 37.9-45.3 65.9c-.9-2.6-1.4-5.3-1.4-8.1l0-39.4c0-13.6-4.2-36.3-12.5-55.2c-4.1-9.4-8.5-16.3-12.7-20.6c-4-4.1-6.2-4.2-6.8-4.2c0 0 0 0 0 0c-.2 0-2.2 0-6.3 4.2c-4.2 4.3-8.7 11.3-12.9 20.7c-8.4 19-12.8 41.7-12.8 55.1l0 39.4c0 7.3-3.3 14.2-9 18.8L53.7 289.3c-.7 .5-1.3 1-2 1.5c-2.3 1.5-3.7 4-3.7 6.7l0 28.7 111-44.8c7.4-3 15.8-2.1 22.4 2.4s10.6 11.9 10.6 19.9l0 72.3c0 7.6-3.6 14.7-9.6 19.2L128 436l0 23.9c6.8-2.1 15.3-4.6 24.3-7.3c22.6-6.8 49.1-14.8 64.6-19.6c4.6-1.4 9.5-1.4 14.1 0c9.1 2.8 21.9 6.7 35.5 10.8c5.4 10.5 12.7 19.9 21.4 27.7l0 16.5c0 4.4 .5 8.7 1.5 12.9l-7.6-2.3c-19.5-5.9-42-12.6-57.9-17.5c-15.9 4.9-38.4 11.6-57.9 17.5c-11.3 3.4-21.7 6.5-29.2 8.8l-8.9 2.7-2.4 .7-.6 .2-.2 0c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0l-6.9-23 6.9 23c-2.2 .7-4.5 1-6.9 1C97 512 80 495 80 474.1L80 432c0-12.6 5.9-24.4 16-32l48-36 0-24.8L53.9 375.6c-.5 .2-1.1 .4-1.7 .6C26.4 384.4 0 365.2 0 338.1l0-40.6c0-18.6 9.2-36 24.6-46.4L144 155.8l0-27.8c0-20.7 6.1-50 16.9-74.5c5.5-12.3 12.8-24.9 22.4-34.8zM288 192c0-16.2 6-31.1 16-42.3c11.7-13.3 28.9-21.7 48-21.7l224 0c35.3 0 64 28.7 64 64l0 184 0 24c0 23.7-12.9 44.4-32 55.4l0 32.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24-192 0 0 10.1 0 13.9c0 13.3-10.7 24-24 24c-2.1 0-4.2-.3-6.1-.8c-4.9-1.3-9.2-4.1-12.3-7.9c0 0 0 0 0 0c-3.4-4.2-5.5-9.5-5.5-15.3l0-28.1 0-4.5c-15.5-9-26.9-24.3-30.7-42.4c-.9-4.2-1.3-8.5-1.3-13l0-24 0-94.9 0-76.6 0-12.5zM400 304l11.2 0 6.4 0 16.8 0 13.6 0 45.6 0 23.2 0 27.2 0-11.9-37c-2.5-6.5-8.4-11-15.3-11l-87.2 0-18.4 0c-6.9 0-12.9 4.5-15.3 11l-1.6 5-4.4 13.8L384 304l16 0zm-50.3-50.3l.5-1.4 .4-1.2 .5-1.2c.2-.6 .5-1.2 .7-1.8c3.6-8.7 9.2-16.7 16.3-23.3c3.5-3.3 7.5-6.2 11.7-8.6c9.1-5.2 19.8-8.3 31.5-8.3l105.6 0c28.8 0 51.4 18.7 60.2 41.9l.5 1.2 .4 1.2 11.9 37 2.3 7.2L592 192c0-8.8-7.2-16-16-16l-224 0c-5.7 0-10.6 2.9-13.5 7.4c-1.6 2.5-2.5 5.4-2.5 8.6l0 20.5 0 30.3 0 53.7 2.3-7.2 11.4-35.6zM445.5 352L422 352l-38 0-8 0-16 0c-5.1 0-9.8 1.6-13.7 4.3c-6.2 4.3-10.3 11.5-10.3 19.7l0 12 0 12c0 8.3 6.3 15.1 14.4 15.9c.5 .1 1.1 .1 1.6 .1l12.7 0L576 416c8.8 0 16-7.2 16-16l0-24c0-13.3-10.7-24-24-24l-24 0-98.5 0zM368 406.6a24 24 0 1 1 16-45.3 24 24 0 1 1 -16 45.3zM552 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TruckPlane;