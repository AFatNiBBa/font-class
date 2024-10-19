
import { Icon } from "../../index";

/**
 * A component that renders the `carrot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/carrot?s=sharp-light carrot}
 * @preview ![carrot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM2IDI0bDEwLTEyLjVMMzM0LjggMi42IDMyNC43IDEyLjcgMzM2IDI0ek00ODggMTc2YzEyLjUtMTAgMTIuNS0xMCAxMi41LTEwczAgMCAwIDBzMCAwIDAgMGMwIDAgMCAwIDAtLjFsLS4xLS4yLS40LS41Yy0uMy0uNC0uOC0uOS0xLjQtMS42Yy0xLjItMS4zLTIuOC0zLjEtNC45LTUuMmMtNC4yLTQuMi0xMC40LTkuOC0xOC4zLTE1LjVjLTE1LjYtMTEuMS0zOC44LTIzLTY3LjMtMjNjLTYuMyAwLTExLjkgLjMtMTYuOCAuOGMuNS00LjkgLjgtMTAuNSAuOC0xNi44YzAtMjguNS0xMS44LTUxLjctMjMtNjcuM2MtNS42LTcuOS0xMS4yLTE0LTE1LjUtMTguM2MtMi4xLTIuMS0zLjktMy44LTUuMi00LjljLS43LS42LTEuMi0xLTEuNi0xLjRsLS41LS40LS4yLS4xYzAgMCAwIDAtLjEgMGMwIDAgMCAwIDAgMHMwIDAgMCAwTDMzNiAyNGMtMTEuMy0xMS4zLTExLjMtMTEuMy0xMS4zLTExLjNzMCAwIDAgMHMwIDAgMCAwYzAgMCAwIDAgMCAwbC0uMSAuMS0uNCAuNGMtLjQgLjQtLjkgLjktMS41IDEuNWMtMS4yIDEuMy0yLjkgMy4yLTUgNS42Yy00LjEgNC43LTkuNSAxMS41LTE0LjkgMTkuN0MyOTIuMiA1NS45IDI4MCA3OS4yIDI4MCAxMDRjMCAxMy45IC44IDI1LjcgMy4yIDM2LjVjLTEwLjYtMi45LTIxLjgtNC41LTMzLjQtNC41Yy00OS44IDAtOTQuOSAyOS4zLTExNS4yIDc0LjdMMTkuNiA0NjguMiAwIDUxMmw0My44LTE5LjZMMzAxLjMgMzc3LjRjNDUuNC0yMC4zIDc0LjctNjUuNCA3NC43LTExNS4yYzAtMTEuNS0xLjYtMjIuNy00LjUtMzMuNGMxMC43IDIuNCAyMi42IDMuMiAzNi41IDMuMmMyNC44IDAgNDguMS0xMi4yIDYzLjktMjIuN2M4LjItNS40IDE0LjktMTAuOSAxOS43LTE0LjljMi40LTIgNC4zLTMuOCA1LjYtNWMuNy0uNiAxLjItMS4xIDEuNS0xLjVsLjQtLjQgLjEtLjFjMCAwIDAgMCAwIDBjMCAwIDAgMCAwIDBzMCAwIDAgMEw0ODggMTc2em0wIDBsMTIuNS0xMCA4LjkgMTEuMi0xMC4xIDEwLjFMNDg4IDE3NnpNMzU2LjcgMTMyLjdMMzY4IDE0NGMxMS4zIDExLjMgMTEuMyAxMS4zIDExLjMgMTEuM3MwIDAgMCAwYzAgMCAwIDAgMCAwbC0uMSAuMS0uMiAuMi0uMyAuM2MtLjIgLjItLjMgLjMtLjUgLjRjLS4xIC4xLS4yIC4yLS4zIC4ybDAgMGMuMi0uMSAxLjEtLjYgMy4xLTEuM2M0LTEuMyAxMi4yLTMuMiAyNi45LTMuMmMxOS41IDAgMzYuMyA4LjEgNDguNyAxN2MyLjkgMi4xIDUuNSA0LjIgNy44IDYuMWMtMyAyLjQtNi42IDUtMTAuNCA3LjVDNDM5LjkgMTkyLjIgNDIzLjIgMjAwIDQwOCAyMDBjLTE5LjIgMC0zMC42LTEuOC0zOS42LTUuNWMtOS0zLjctMTcuMi05LjktMjktMjEuOHMtMTguMS0yMC4xLTIxLjgtMjljLTMuNy05LjEtNS41LTIwLjQtNS41LTM5LjZjMC0xNS4yIDcuOC0zMS45IDE3LjMtNDYuMWMyLjYtMy45IDUuMi03LjQgNy41LTEwLjRjMiAyLjMgNC4xIDQuOSA2LjEgNy44YzguOSAxMi40IDE3IDI5LjIgMTcgNDguN2MwIDE0LjctMS44IDIyLjktMy4yIDI2LjljLS43IDItMS4yIDIuOS0xLjMgMy4xYzAgMCAwIDAgMCAwcy4xLS4xIC4yLS4zYy4xLS4xIC4yLS4zIC40LS41bC4zLS4zIC4yLS4yIC4xLS4xYzAgMCAwIDAgMCAwYzAgMCAwIDAgMCAwek02My40IDQ0OC42bDkyLjItMjA2LjQgMjUuMSAyNS4xTDE5MiAyNzguNiAyMTQuNiAyNTZsLTExLjMtMTEuMy0zMy0zM2MxNy4xLTI2LjkgNDctNDMuNyA3OS41LTQzLjdjNTIgMCA5NC4yIDQyLjIgOTQuMiA5NC4yYzAgMzcuMi0yMS44IDcwLjgtNTUuOCA4NkwxNjguNCA0MDEuN2wtMjEtMjFMMTM2IDM2OS40IDExMy40IDM5MmwxMS4zIDExLjMgMTIuNCAxMi40TDYzLjQgNDQ4LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Carrot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 24l10-12.5L334.8 2.6 324.7 12.7 336 24zM488 176c12.5-10 12.5-10 12.5-10s0 0 0 0s0 0 0 0c0 0 0 0 0-.1l-.1-.2-.4-.5c-.3-.4-.8-.9-1.4-1.6c-1.2-1.3-2.8-3.1-4.9-5.2c-4.2-4.2-10.4-9.8-18.3-15.5c-15.6-11.1-38.8-23-67.3-23c-6.3 0-11.9 .3-16.8 .8c.5-4.9 .8-10.5 .8-16.8c0-28.5-11.8-51.7-23-67.3c-5.6-7.9-11.2-14-15.5-18.3c-2.1-2.1-3.9-3.8-5.2-4.9c-.7-.6-1.2-1-1.6-1.4l-.5-.4-.2-.1c0 0 0 0-.1 0c0 0 0 0 0 0s0 0 0 0L336 24c-11.3-11.3-11.3-11.3-11.3-11.3s0 0 0 0s0 0 0 0c0 0 0 0 0 0l-.1 .1-.4 .4c-.4 .4-.9 .9-1.5 1.5c-1.2 1.3-2.9 3.2-5 5.6c-4.1 4.7-9.5 11.5-14.9 19.7C292.2 55.9 280 79.2 280 104c0 13.9 .8 25.7 3.2 36.5c-10.6-2.9-21.8-4.5-33.4-4.5c-49.8 0-94.9 29.3-115.2 74.7L19.6 468.2 0 512l43.8-19.6L301.3 377.4c45.4-20.3 74.7-65.4 74.7-115.2c0-11.5-1.6-22.7-4.5-33.4c10.7 2.4 22.6 3.2 36.5 3.2c24.8 0 48.1-12.2 63.9-22.7c8.2-5.4 14.9-10.9 19.7-14.9c2.4-2 4.3-3.8 5.6-5c.7-.6 1.2-1.1 1.5-1.5l.4-.4 .1-.1c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0L488 176zm0 0l12.5-10 8.9 11.2-10.1 10.1L488 176zM356.7 132.7L368 144c11.3 11.3 11.3 11.3 11.3 11.3s0 0 0 0c0 0 0 0 0 0l-.1 .1-.2 .2-.3 .3c-.2 .2-.3 .3-.5 .4c-.1 .1-.2 .2-.3 .2l0 0c.2-.1 1.1-.6 3.1-1.3c4-1.3 12.2-3.2 26.9-3.2c19.5 0 36.3 8.1 48.7 17c2.9 2.1 5.5 4.2 7.8 6.1c-3 2.4-6.6 5-10.4 7.5C439.9 192.2 423.2 200 408 200c-19.2 0-30.6-1.8-39.6-5.5c-9-3.7-17.2-9.9-29-21.8s-18.1-20.1-21.8-29c-3.7-9.1-5.5-20.4-5.5-39.6c0-15.2 7.8-31.9 17.3-46.1c2.6-3.9 5.2-7.4 7.5-10.4c2 2.3 4.1 4.9 6.1 7.8c8.9 12.4 17 29.2 17 48.7c0 14.7-1.8 22.9-3.2 26.9c-.7 2-1.2 2.9-1.3 3.1c0 0 0 0 0 0s.1-.1 .2-.3c.1-.1 .2-.3 .4-.5l.3-.3 .2-.2 .1-.1c0 0 0 0 0 0c0 0 0 0 0 0zM63.4 448.6l92.2-206.4 25.1 25.1L192 278.6 214.6 256l-11.3-11.3-33-33c17.1-26.9 47-43.7 79.5-43.7c52 0 94.2 42.2 94.2 94.2c0 37.2-21.8 70.8-55.8 86L168.4 401.7l-21-21L136 369.4 113.4 392l11.3 11.3 12.4 12.4L63.4 448.6z" />
    </Icon>
);

export default Carrot;