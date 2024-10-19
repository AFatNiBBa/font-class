
import { Icon } from "../../index";

/**
 * A component that renders the `biohazard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/biohazard?s=sharp-light biohazard}
 * @preview ![biohazard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUyIDBsOCAwIC45IDAgMTcuOSAwLTIgMTcuOGMtMy41IDMwLjggNC40IDYyLjUgMjIuNyA4Ni4zYzE4IDIzLjMgNDcgNDAgODguNSA0MHM3MC40LTE2LjYgODguNS00MGMxOC40LTIzLjcgMjYuMi01NS41IDIyLjctODYuM0wzOTcuMiAwbDE3LjkgMCAuOSAwIDggMCA0LjggNi40QzQ1MC45IDM1LjggNDY0IDcyLjQgNDY0IDExMmMwIDE4LjYtMi45IDM2LjUtOC4yIDUzLjNjMTUuNCAzLjkgMzAuNiAxMCA0NS4xIDE4LjNjMzQuMyAxOS44IDU5LjQgNDkuNCA3My45IDgzLjNsMy4xIDcuNC00IDYuOS0uNSAuOC04LjkgMTUuNS0xNC40LTEwLjZjLTI0LjktMTguNC01Ni4zLTI3LjUtODYuMS0yMy40Yy0yOS4yIDQtNTguMSAyMC43LTc4LjggNTYuNnMtMjAuOCA2OS4zLTkuNiA5Ni42YzExLjQgMjcuOCAzNSA1MC40IDYzLjMgNjIuOGwxNi40IDcuMi04LjkgMTUuNS0uNSAuOC00IDYuOS03LjkgMWMtMzYuNSA0LjQtNzQuOC0yLjUtMTA5LjEtMjIuM2MtMTMuOC04LTI2LjEtMTcuNS0zNi45LTI4LjNjLTEwLjcgMTAuOC0yMy4xIDIwLjQtMzYuOSAyOC4zYy0zNC4zIDE5LjgtNzIuNSAyNi44LTEwOS4xIDIyLjNsLTcuOS0xLTQtNi45LS41LS44LTguOS0xNS41IDE2LjQtNy4yYzI4LjQtMTIuNCA1MS45LTM1IDYzLjMtNjIuOGMxMS4yLTI3LjMgMTEuMS02MC43LTkuNi05Ni42cy00OS42LTUyLjctNzguOC01Ni42Yy0yOS43LTQtNjEuMSA1LjEtODYuMSAyMy40TDExLjUgMjk3LjQgMi42IDI4MS45bC0uNS0uOC00LTYuOSAzLjEtNy40YzE0LjQtMzMuOCAzOS42LTYzLjUgNzMuOS04My4zYzE0LjUtOC4zIDI5LjYtMTQuNCA0NS4xLTE4LjNjLTUuMy0xNi44LTguMi0zNC43LTguMi01My4zYzAtMzkuNiAxMy4xLTc2LjIgMzUuMi0xMDUuNkwxNTIgMHptLTIuNiA3Mi45QzE0NS45IDg1LjMgMTQ0IDk4LjQgMTQ0IDExMmMwIDIxIDQuNSA0MC45IDEyLjUgNTguOGw4LjggMTkuNkwxNDQgMTkzLjNjLTE4LjEgMi40LTM2LjEgOC4zLTUyLjkgMTguMUM3OS40IDIxOC4xIDY5IDIyNi4zIDYwIDIzNS41YzE4LjItNC45IDM3LjQtNi40IDU2LjMtMy44YzM5LjQgNS4zIDc2LjggMjguMiAxMDIuMyA3Mi4zczI2LjYgODcuOSAxMS41IDEyNC43Yy03LjMgMTcuNy0xOC4xIDMzLjUtMzEuNSA0Ni45YzEyLjUtMy4yIDI0LjgtOC4xIDM2LjUtMTQuOWMxNi05LjIgMjkuNS0yMSA0MC40LTM0LjZMMjg4IDQxMC42bDEyLjUgMTUuNmMxMC45IDEzLjUgMjQuNCAyNS40IDQwLjQgMzQuNmMxMS43IDYuOCAyNCAxMS43IDM2LjUgMTQuOWMtMTMuMy0xMy4zLTI0LjItMjkuMi0zMS41LTQ2LjljLTE1LjEtMzYuOC0xNC04MC42IDExLjUtMTI0LjdzNjIuOS02NyAxMDIuMy03Mi4zYzE5LTIuNiAzOC4xLTEuMSA1Ni4zIDMuOGMtOS05LjItMTkuNC0xNy40LTMxLjItMjQuMmMtMTYuOC05LjctMzQuOC0xNS42LTUyLjktMTguMWwtMjEuMy0yLjggOC44LTE5LjZjOC0xNy45IDEyLjUtMzcuOSAxMi41LTU4LjljMC0xMy42LTEuOS0yNi43LTUuNC0zOS4xYy00LjkgMTguMi0xMy4xIDM1LjUtMjQuOSA1MC43QzM3Ny41IDE1NS4xIDMzOSAxNzYgMjg4IDE3NnMtODkuNS0yMC45LTExMy44LTUyLjRjLTExLjctMTUuMS0yMC0zMi41LTI0LjktNTAuN3ptNS4xIDM1OC42Yy00MC4xLTMzLjYtNjcuNC04Mi4xLTczLjMtMTM2LjljOS0xLjggMTguMS0yLjIgMjYuNy0xLjFjMS44IC4yIDMuNyAuNiA1LjUgMWM1LjYgNDMuOSAyNy4zIDgyLjcgNTkgMTEwLjNsLS4xIC4zYy0zLjkgOS42LTEwLjEgMTguNi0xNy45IDI2LjR6TTI4OCA5NmMtMTUuOSAwLTMxLjMgMi4xLTQ1LjkgNi4xYy03LjYtNC42LTEzLjctMTAuNC0xOC41LTE2LjZjLTIuMi0yLjktNC4yLTYtNi4xLTkuMkMyMzkuNSA2OC4zIDI2My4zIDY0IDI4OCA2NHM0OC41IDQuMyA3MC41IDEyLjJjLTEuOCAzLjItMy44IDYuMy02LjEgOS4yYy00LjggNi4yLTEwLjkgMTItMTguNSAxNi42Yy0xNC42LTMuOS0zMC02LjEtNDUuOS02LjF6TTQ2Mi42IDI5NC41YzEuOC0uNCAzLjctLjcgNS41LTFjOC42LTEuMiAxNy43LS44IDI2LjcgMS4xYy01LjkgNTQuOS0zMy4yIDEwMy4zLTczLjMgMTM2LjljLTcuOC03LjgtMTMuOS0xNi44LTE3LjktMjYuNGwtLjEtLjNjMzEuNy0yNy42IDUzLjUtNjYuNCA1OS4xLTExMC4zek0yODggMjQ4YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Biohazard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M152 0l8 0 .9 0 17.9 0-2 17.8c-3.5 30.8 4.4 62.5 22.7 86.3c18 23.3 47 40 88.5 40s70.4-16.6 88.5-40c18.4-23.7 26.2-55.5 22.7-86.3L397.2 0l17.9 0 .9 0 8 0 4.8 6.4C450.9 35.8 464 72.4 464 112c0 18.6-2.9 36.5-8.2 53.3c15.4 3.9 30.6 10 45.1 18.3c34.3 19.8 59.4 49.4 73.9 83.3l3.1 7.4-4 6.9-.5 .8-8.9 15.5-14.4-10.6c-24.9-18.4-56.3-27.5-86.1-23.4c-29.2 4-58.1 20.7-78.8 56.6s-20.8 69.3-9.6 96.6c11.4 27.8 35 50.4 63.3 62.8l16.4 7.2-8.9 15.5-.5 .8-4 6.9-7.9 1c-36.5 4.4-74.8-2.5-109.1-22.3c-13.8-8-26.1-17.5-36.9-28.3c-10.7 10.8-23.1 20.4-36.9 28.3c-34.3 19.8-72.5 26.8-109.1 22.3l-7.9-1-4-6.9-.5-.8-8.9-15.5 16.4-7.2c28.4-12.4 51.9-35 63.3-62.8c11.2-27.3 11.1-60.7-9.6-96.6s-49.6-52.7-78.8-56.6c-29.7-4-61.1 5.1-86.1 23.4L11.5 297.4 2.6 281.9l-.5-.8-4-6.9 3.1-7.4c14.4-33.8 39.6-63.5 73.9-83.3c14.5-8.3 29.6-14.4 45.1-18.3c-5.3-16.8-8.2-34.7-8.2-53.3c0-39.6 13.1-76.2 35.2-105.6L152 0zm-2.6 72.9C145.9 85.3 144 98.4 144 112c0 21 4.5 40.9 12.5 58.8l8.8 19.6L144 193.3c-18.1 2.4-36.1 8.3-52.9 18.1C79.4 218.1 69 226.3 60 235.5c18.2-4.9 37.4-6.4 56.3-3.8c39.4 5.3 76.8 28.2 102.3 72.3s26.6 87.9 11.5 124.7c-7.3 17.7-18.1 33.5-31.5 46.9c12.5-3.2 24.8-8.1 36.5-14.9c16-9.2 29.5-21 40.4-34.6L288 410.6l12.5 15.6c10.9 13.5 24.4 25.4 40.4 34.6c11.7 6.8 24 11.7 36.5 14.9c-13.3-13.3-24.2-29.2-31.5-46.9c-15.1-36.8-14-80.6 11.5-124.7s62.9-67 102.3-72.3c19-2.6 38.1-1.1 56.3 3.8c-9-9.2-19.4-17.4-31.2-24.2c-16.8-9.7-34.8-15.6-52.9-18.1l-21.3-2.8 8.8-19.6c8-17.9 12.5-37.9 12.5-58.9c0-13.6-1.9-26.7-5.4-39.1c-4.9 18.2-13.1 35.5-24.9 50.7C377.5 155.1 339 176 288 176s-89.5-20.9-113.8-52.4c-11.7-15.1-20-32.5-24.9-50.7zm5.1 358.6c-40.1-33.6-67.4-82.1-73.3-136.9c9-1.8 18.1-2.2 26.7-1.1c1.8 .2 3.7 .6 5.5 1c5.6 43.9 27.3 82.7 59 110.3l-.1 .3c-3.9 9.6-10.1 18.6-17.9 26.4zM288 96c-15.9 0-31.3 2.1-45.9 6.1c-7.6-4.6-13.7-10.4-18.5-16.6c-2.2-2.9-4.2-6-6.1-9.2C239.5 68.3 263.3 64 288 64s48.5 4.3 70.5 12.2c-1.8 3.2-3.8 6.3-6.1 9.2c-4.8 6.2-10.9 12-18.5 16.6c-14.6-3.9-30-6.1-45.9-6.1zM462.6 294.5c1.8-.4 3.7-.7 5.5-1c8.6-1.2 17.7-.8 26.7 1.1c-5.9 54.9-33.2 103.3-73.3 136.9c-7.8-7.8-13.9-16.8-17.9-26.4l-.1-.3c31.7-27.6 53.5-66.4 59.1-110.3zM288 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Biohazard;