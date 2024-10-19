
import { Icon } from "../../index";

/**
 * A component that renders the `spaghetti-monster-flying` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spaghetti-monster-flying?s=sharp-light spaghetti-monster-flying}
 * @preview ![spaghetti-monster-flying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDMyYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHptNDIgODAuM2MxMy41LTExLjcgMjItMjkgMjItNDguM2MwLTM1LjMtMjguNy02NC02NC02NHMtNjQgMjguNy02NCA2NHMyOC43IDY0IDY0IDY0YzQuNiAwIDkuMS0uNSAxMy40LTEuNEwyMTkgMTUzLjdjLTI0LjkgMTQuNS00My44IDMzLjUtNTkuMiA1Mi4xYy03LjYgOS4xLTE0LjQgMTguMi0yMC42IDI2LjRsLS41IC43Yy02LjQgOC41LTEyIDE1LjktMTcuNCAyMi4yYy0xMS4zIDEzLTE4LjcgMTctMjUuMiAxN2MtNSAwLTguNy0xLjgtMTIuNy01LjVjLTQuNS00LjQtOC41LTEwLjUtMTMuOC0xOC45bC0uNS0uN2MtNC43LTcuNS0xMC42LTE2LjktMTguMy0yNC4zQzQyLjMgMjE0LjIgMzEgMjA4IDE2IDIwOEwwIDIwOGwwIDMyIDE2IDBjNSAwIDguNyAxLjggMTIuNyA1LjVjNC41IDQuNCA4LjUgMTAuNSAxMy44IDE4LjlsLjUgLjdjNC43IDcuNSAxMC42IDE2LjkgMTguMyAyNC4zQzY5LjcgMjk3LjggODEgMzA0IDk2IDMwNGMxOS40IDAgMzQuMS0xMS40IDQ1LjctMjMuOWwxIDEuNWM0LjQgNi41IDEwLjIgMTQuMyAxNy4yIDIyLjZjLTMgOC41LTUuNiAxNy04IDI0LjljMCAwIDAgMCAwIDBsLTEuMyA0LjNjLTMuNCAxMS4yLTYuNSAyMC44LTEwLjIgMjguOGMtMy43IDgtNy41IDEzLjMtMTEuNyAxNi43Yy0zLjggMy04LjggNS4yLTE2LjcgNS4yYy0xMSAwLTIxLTUuMy0zNi44LTEzLjhsLS42LS4zYy0xNS04LTM0LjItMTcuOS01OC41LTE3LjlMMCAzNTJsMCAzMiAxNiAwYzE1LjYgMCAyOC41IDYuMSA0My41IDE0LjFsMy4xIDEuN0M3NS45IDQwNyA5Mi43IDQxNiAxMTIgNDE2YzE0LjYgMCAyNi44LTQuMiAzNi43LTEyLjJjOS42LTcuNiAxNi0xNy45IDIwLjgtMjguMmM0LjgtMTAuMyA4LjQtMjEuOSAxMS44LTMyLjlsMS4zLTQuNGMuOS0yLjggMS43LTUuNiAyLjYtOC40YzE5LjMgMTcgNDQuMSAzMy40IDc0LjYgNDMuMmwtMSAzLjRzMCAwIDAgMGMtNS40IDE4LjQtMTMgNDMuOC0yNC4zIDY1LjZjLTEzIDI1LTI3LjIgMzcuOS00Mi40IDM3LjlsLTE2IDAgMCAzMiAxNiAwYzM1LjEgMCA1Ny4zLTI5LjEgNzAuOC01NS4xYzEyLjgtMjQuNyAyMS4yLTUzLjEgMjYuNi03MS4yYy41LTEuOCAxLTMuNSAxLjUtNS4xbC4xLS4zYzkuMiAxLjQgMTguOSAyLjEgMjkgMi4xczE5LjctLjcgMjktMi4xbC4xIC4zYy41IDEuNiAxIDMuMyAxLjUgNS4xYzAgMCAwIDAgMCAwYzUuMyAxOC4xIDEzLjggNDYuNSAyNi42IDcxLjJjMTMuNSAyNiAzNS44IDU1LjEgNzAuOCA1NS4xbDE2IDAgMC0zMi0xNiAwYy0xNS4yIDAtMjkuNC0xMi45LTQyLjQtMzcuOWMtMTEuMy0yMS44LTE4LjktNDcuMi0yNC4zLTY1LjZjMCAwIDAgMCAwIDBzMCAwIDAgMGwtMS0zLjRjMzAuNS05LjggNTUuMy0yNi4yIDc0LjYtNDMuMmMuOSAyLjggMS43IDUuNiAyLjYgOC40bDEuMyA0LjRjMy40IDExIDcgMjIuNiAxMS44IDMyLjljNC44IDEwLjMgMTEuMiAyMC42IDIwLjggMjguMmM5LjkgNy45IDIyLjEgMTIuMiAzNi43IDEyLjJjMTkuMyAwIDM2LjEtOSA0OS40LTE2LjJsMy4xLTEuN2MxNS04IDI3LjgtMTQuMSA0My41LTE0LjFsMTYgMCAwLTMyLTE2IDBjLTI0LjQgMC00My41IDkuOS01OC41IDE3LjlsLS42IC4zQzU0OSAzNzguNyA1MzkgMzg0IDUyOCAzODRjLTcuOSAwLTEyLjktMi4xLTE2LjctNS4yYy00LjItMy4zLTgtOC42LTExLjctMTYuN2MtMy43LTguMS02LjgtMTcuNy0xMC4yLTI4LjhsLTEuMy00LjNjLTIuNC03LjktNS0xNi40LTgtMjQuOWM3LjEtOC4zIDEyLjgtMTYuMSAxNy4yLTIyLjZsMS0xLjVDNTA5LjkgMjkyLjYgNTI0LjYgMzA0IDU0NCAzMDRjMTUgMCAyNi4zLTYuMiAzNC44LTE0LjVjNy43LTcuNCAxMy42LTE2LjggMTguMy0yNC4zYzAgMCAwIDAgMCAwczAgMCAwIDBsLjUtLjdjNS4zLTguNCA5LjItMTQuNiAxMy44LTE4LjljMy45LTMuOCA3LjYtNS41IDEyLjctNS41bDE2IDAgMC0zMi0xNiAwYy0xNSAwLTI2LjMgNi4yLTM0LjggMTQuNWMtNy43IDcuNC0xMy42IDE2LjgtMTguMyAyNC4zYzAgMCAwIDAgMCAwczAgMCAwIDBsLS41IC43Yy01LjMgOC40LTkuMiAxNC42LTEzLjggMTguOWMtMy45IDMuOC03LjYgNS41LTEyLjcgNS41Yy02LjUgMC0xMy45LTQtMjUuMi0xN2MtNS40LTYuMi0xMS0xMy42LTE3LjQtMjIuMmwtLjUtLjdjLTYuMi04LjItMTMtMTcuMy0yMC42LTI2LjRjLTE1LjUtMTguNi0zNC40LTM3LjUtNTkuMi01Mi4xbDEzLjUtMjcuMWM0LjMgLjkgOC44IDEuNCAxMy40IDEuNGMzNS4zIDAgNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NHMtNjQgMjguNy02NCA2NGMwIDE5LjMgOC41IDM2LjUgMjIgNDguM0wzOTIuMSAxNDBjLTIwLjQtNy41LTQ0LjItMTItNzIuMS0xMnMtNTEuNyA0LjUtNzIuMSAxMkwyMzQgMTEyLjN6TTQ0OCAzMmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTQuNiAyNTkuOGMtLjkgLjgtMS43IDEuNy0yLjUgMi42Yy0yLjIgMi40LTQuNiA0LjgtNy4xIDcuMmMtMjcuMyAyNi4zLTY3LjkgNTItMTIzIDUycy05NS43LTI1LjYtMTIzLTUyYy0yLjUtMi40LTQuOC00LjgtNy4xLTcuMmMtLjctMS0xLjUtMS44LTIuNS0yLjZjLTguOS05LjctMTUuOS0xOS0yMC45LTI2LjRjLTIuMy0zLjQtNC4yLTYuNC01LjctOC45bDMuNC00LjUgLjMtLjRjNi4zLTguNCAxMi43LTE2LjkgMTkuOC0yNS40QzIxMi41IDE5Mi4zIDI1MC40IDE2MCAzMjAgMTYwczEwNy41IDMyLjMgMTM1LjcgNjYuMmM3LjEgOC41IDEzLjUgMTcgMTkuOCAyNS40bC4zIC40IDMuNCA0LjVjLTEuNSAyLjUtMy40IDUuNS01LjcgOC45Yy01IDcuNC0xMiAxNi43LTIwLjkgMjYuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SpaghettiMonsterFlying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm42 80.3c13.5-11.7 22-29 22-48.3c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64c4.6 0 9.1-.5 13.4-1.4L219 153.7c-24.9 14.5-43.8 33.5-59.2 52.1c-7.6 9.1-14.4 18.2-20.6 26.4l-.5 .7c-6.4 8.5-12 15.9-17.4 22.2c-11.3 13-18.7 17-25.2 17c-5 0-8.7-1.8-12.7-5.5c-4.5-4.4-8.5-10.5-13.8-18.9l-.5-.7c-4.7-7.5-10.6-16.9-18.3-24.3C42.3 214.2 31 208 16 208L0 208l0 32 16 0c5 0 8.7 1.8 12.7 5.5c4.5 4.4 8.5 10.5 13.8 18.9l.5 .7c4.7 7.5 10.6 16.9 18.3 24.3C69.7 297.8 81 304 96 304c19.4 0 34.1-11.4 45.7-23.9l1 1.5c4.4 6.5 10.2 14.3 17.2 22.6c-3 8.5-5.6 17-8 24.9c0 0 0 0 0 0l-1.3 4.3c-3.4 11.2-6.5 20.8-10.2 28.8c-3.7 8-7.5 13.3-11.7 16.7c-3.8 3-8.8 5.2-16.7 5.2c-11 0-21-5.3-36.8-13.8l-.6-.3c-15-8-34.2-17.9-58.5-17.9L0 352l0 32 16 0c15.6 0 28.5 6.1 43.5 14.1l3.1 1.7C75.9 407 92.7 416 112 416c14.6 0 26.8-4.2 36.7-12.2c9.6-7.6 16-17.9 20.8-28.2c4.8-10.3 8.4-21.9 11.8-32.9l1.3-4.4c.9-2.8 1.7-5.6 2.6-8.4c19.3 17 44.1 33.4 74.6 43.2l-1 3.4s0 0 0 0c-5.4 18.4-13 43.8-24.3 65.6c-13 25-27.2 37.9-42.4 37.9l-16 0 0 32 16 0c35.1 0 57.3-29.1 70.8-55.1c12.8-24.7 21.2-53.1 26.6-71.2c.5-1.8 1-3.5 1.5-5.1l.1-.3c9.2 1.4 18.9 2.1 29 2.1s19.7-.7 29-2.1l.1 .3c.5 1.6 1 3.3 1.5 5.1c0 0 0 0 0 0c5.3 18.1 13.8 46.5 26.6 71.2c13.5 26 35.8 55.1 70.8 55.1l16 0 0-32-16 0c-15.2 0-29.4-12.9-42.4-37.9c-11.3-21.8-18.9-47.2-24.3-65.6c0 0 0 0 0 0s0 0 0 0l-1-3.4c30.5-9.8 55.3-26.2 74.6-43.2c.9 2.8 1.7 5.6 2.6 8.4l1.3 4.4c3.4 11 7 22.6 11.8 32.9c4.8 10.3 11.2 20.6 20.8 28.2c9.9 7.9 22.1 12.2 36.7 12.2c19.3 0 36.1-9 49.4-16.2l3.1-1.7c15-8 27.8-14.1 43.5-14.1l16 0 0-32-16 0c-24.4 0-43.5 9.9-58.5 17.9l-.6 .3C549 378.7 539 384 528 384c-7.9 0-12.9-2.1-16.7-5.2c-4.2-3.3-8-8.6-11.7-16.7c-3.7-8.1-6.8-17.7-10.2-28.8l-1.3-4.3c-2.4-7.9-5-16.4-8-24.9c7.1-8.3 12.8-16.1 17.2-22.6l1-1.5C509.9 292.6 524.6 304 544 304c15 0 26.3-6.2 34.8-14.5c7.7-7.4 13.6-16.8 18.3-24.3c0 0 0 0 0 0s0 0 0 0l.5-.7c5.3-8.4 9.2-14.6 13.8-18.9c3.9-3.8 7.6-5.5 12.7-5.5l16 0 0-32-16 0c-15 0-26.3 6.2-34.8 14.5c-7.7 7.4-13.6 16.8-18.3 24.3c0 0 0 0 0 0s0 0 0 0l-.5 .7c-5.3 8.4-9.2 14.6-13.8 18.9c-3.9 3.8-7.6 5.5-12.7 5.5c-6.5 0-13.9-4-25.2-17c-5.4-6.2-11-13.6-17.4-22.2l-.5-.7c-6.2-8.2-13-17.3-20.6-26.4c-15.5-18.6-34.4-37.5-59.2-52.1l13.5-27.1c4.3 .9 8.8 1.4 13.4 1.4c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 19.3 8.5 36.5 22 48.3L392.1 140c-20.4-7.5-44.2-12-72.1-12s-51.7 4.5-72.1 12L234 112.3zM448 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm4.6 259.8c-.9 .8-1.7 1.7-2.5 2.6c-2.2 2.4-4.6 4.8-7.1 7.2c-27.3 26.3-67.9 52-123 52s-95.7-25.6-123-52c-2.5-2.4-4.8-4.8-7.1-7.2c-.7-1-1.5-1.8-2.5-2.6c-8.9-9.7-15.9-19-20.9-26.4c-2.3-3.4-4.2-6.4-5.7-8.9l3.4-4.5 .3-.4c6.3-8.4 12.7-16.9 19.8-25.4C212.5 192.3 250.4 160 320 160s107.5 32.3 135.7 66.2c7.1 8.5 13.5 17 19.8 25.4l.3 .4 3.4 4.5c-1.5 2.5-3.4 5.5-5.7 8.9c-5 7.4-12 16.7-20.9 26.4z" />
    </Icon>
);

export default SpaghettiMonsterFlying;