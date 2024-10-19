
import { Icon } from "../../index";

/**
 * A component that renders the `face-smiling-hands` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smiling-hands?s=regular face-smiling-hands}
 * @preview ![face-smiling-hands](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDM1MmMtMjcuNCAwLTQ4LjYtOS40LTY0LTIwLjlsMCA1Mi45IDAgMi41YzE4IDguMSAzOS40IDEzLjUgNjQgMTMuNXM0Ni01LjQgNjQtMTMuNWwwLTIuNSAwLTUyLjljLTE1LjQgMTEuNS0zNi42IDIwLjktNjQgMjAuOXpNMTEyIDI1Mi4zQzExNCAxMzkuMSAyMDYuNCA0OCAzMjAgNDhzMjA2IDkxLjEgMjA4IDIwNC4zYzEzLjMtMTEuOSAzMS43LTE1LjIgNDcuNy05LjZDNTY4LjcgMTA3LjUgNDU2LjkgMCAzMjAgMFM3MS4zIDEwNy41IDY0LjMgMjQyLjZjMTYtNS41IDM0LjQtMi4zIDQ3LjcgOS42em0xMzkgMjAwYy00LjYgMTUuOC0xMi4yIDMwLjQtMjIuMSA0M2MyOC4zIDEwLjggNTkgMTYuNyA5MS4xIDE2LjdzNjIuOC01LjkgOTEuMS0xNi43Yy05LjktMTIuNi0xNy41LTI3LjItMjIuMS00M2MtMjEuNiA3LjYtNDQuOCAxMS43LTY5IDExLjdzLTQ3LjQtNC4xLTY5LTExLjd6bTMwLjYtMjIzLjVzMCAwIDAgMHMwIDAgMCAwYzIuMSAyLjggNS43IDMuOSA4LjkgMi44czUuNS00LjEgNS41LTcuNmMwLTE3LjktNi43LTM1LjYtMTYuNi00OC44Yy05LjgtMTMtMjMuOS0yMy4yLTM5LjQtMjMuMnMtMjkuNiAxMC4yLTM5LjQgMjMuMkMxOTAuNyAxODguNCAxODQgMjA2LjEgMTg0IDIyNGMwIDMuNCAyLjIgNi41IDUuNSA3LjZzNi45IDAgOC45LTIuOGMwIDAgMCAwIDAgMHMwIDAgMCAwYzAgMCAwIDAgMCAwbC4yLS4yYy4yLS4yIC40LS41IC43LS45Yy42LS44IDEuNi0yIDIuOC0zLjRjMi41LTIuOCA2LTYuNiAxMC4yLTEwLjNjOC44LTcuOCAxOC44LTE0IDI3LjctMTRzMTguOSA2LjIgMjcuNyAxNGM0LjIgMy43IDcuNyA3LjUgMTAuMiAxMC4zYzEuMiAxLjQgMi4yIDIuNiAyLjggMy40Yy4zIC40IC42IC43IC43IC45bC4yIC4yYzAgMCAwIDAgMCAwYzAgMCAwIDAgMCAwem0xNjAgMHMwIDAgMCAwczAgMCAwIDBzMCAwIDAgMGMyLjEgMi44IDUuNyAzLjkgOC45IDIuOHM1LjUtNC4xIDUuNS03LjZjMC0xNy45LTYuNy0zNS42LTE2LjYtNDguOGMtOS44LTEzLTIzLjktMjMuMi0zOS40LTIzLjJzLTI5LjYgMTAuMi0zOS40IDIzLjJDMzUwLjcgMTg4LjQgMzQ0IDIwNi4xIDM0NCAyMjRjMCAzLjQgMi4yIDYuNSA1LjUgNy42czYuOSAwIDguOS0yLjhjMCAwIDAgMCAwIDBzMCAwIDAgMGMwIDAgMCAwIDAgMGwuMi0uMmMuMi0uMiAuNC0uNSAuNy0uOWMuNi0uOCAxLjYtMiAyLjgtMy40YzIuNS0yLjggNi02LjYgMTAuMi0xMC4zYzguOC03LjggMTguOC0xNCAyNy43LTE0czE4LjkgNi4yIDI3LjcgMTRjNC4yIDMuNyA3LjcgNy41IDEwLjIgMTAuM2MxLjIgMS40IDIuMiAyLjYgMi44IDMuNGMuMyAuNCAuNiAuNyAuNyAuOWwuMiAuMmMwIDAgMCAwIDAgMHptMTI5LjcgNzAuNWM2LjItNi4yIDYuMi0xNi40IDAtMjIuNnMtMTYuNC02LjItMjIuNiAwbC03OSA3OWMtNSA1LTEzLjcgMS41LTEzLjctNS43bDAtMTkuN2MwLTExLTktMjAtMjAtMjBzLTIwIDktMjAgMjBsMCA1My42IDAgMzIuOGMwIDUyLjYgNDIuNiA5NS4yIDk1LjIgOTUuMmMyNS4yIDAgNDkuNS0xMCA2Ny4zLTI3LjlsNTYuOC01Ni44YzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMNTkzLjQgNDI0Yy0yLjYgMi42LTYuOCAyLjYtOS40IDBzLTIuNi02LjggMC05LjRsNTEuMy01MS4zYzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMNTYxLjQgMzkyYy0yLjYgMi42LTYuOCAyLjYtOS40IDBzLTIuNi02LjggMC05LjRsNjcuMy02Ny4zYzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMNTI5LjQgMzYwYy0yLjYgMi42LTYuOCAyLjYtOS40IDBzLTIuNi02LjggMC05LjRsNTEuMy01MS4zek02OC43IDI3Ni43Yy02LjIgNi4yLTYuMiAxNi40IDAgMjIuNkwxMjAgMzUwLjZjMi42IDIuNiAyLjYgNi44IDAgOS40cy02LjggMi42LTkuNCAwTDQzLjMgMjkyLjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZMODggMzgyLjZjMi42IDIuNiAyLjYgNi44IDAgOS40cy02LjggMi42LTkuNCAwTDI3LjMgMzQwLjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZMNTYgNDE0LjZjMi42IDIuNiAyLjYgNi44IDAgOS40cy02LjggMi42LTkuNCAwTDI3LjMgNDA0LjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZsNTYuOCA1Ni44Qzc5LjMgNTAyIDEwMy42IDUxMiAxMjguOCA1MTJjNTIuNiAwIDk1LjItNDIuNiA5NS4yLTk1LjJsMC0zMi44IDAtNTMuNmMwLTExLTktMjAtMjAtMjBzLTIwIDktMjAgMjBsMCAxOS43YzAgNy4xLTguNiAxMC43LTEzLjcgNS43bC03OS03OWMtNi4yLTYuMi0xNi40LTYuMi0yMi42IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceSmilingHands: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 352c-27.4 0-48.6-9.4-64-20.9l0 52.9 0 2.5c18 8.1 39.4 13.5 64 13.5s46-5.4 64-13.5l0-2.5 0-52.9c-15.4 11.5-36.6 20.9-64 20.9zM112 252.3C114 139.1 206.4 48 320 48s206 91.1 208 204.3c13.3-11.9 31.7-15.2 47.7-9.6C568.7 107.5 456.9 0 320 0S71.3 107.5 64.3 242.6c16-5.5 34.4-2.3 47.7 9.6zm139 200c-4.6 15.8-12.2 30.4-22.1 43c28.3 10.8 59 16.7 91.1 16.7s62.8-5.9 91.1-16.7c-9.9-12.6-17.5-27.2-22.1-43c-21.6 7.6-44.8 11.7-69 11.7s-47.4-4.1-69-11.7zm30.6-223.5s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C190.7 188.4 184 206.1 184 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0c0 0 0 0 0 0zm160 0s0 0 0 0s0 0 0 0s0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C350.7 188.4 344 206.1 344 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8c0 0 0 0 0 0s0 0 0 0c0 0 0 0 0 0l.2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2c0 0 0 0 0 0zm129.7 70.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-79 79c-5 5-13.7 1.5-13.7-5.7l0-19.7c0-11-9-20-20-20s-20 9-20 20l0 53.6 0 32.8c0 52.6 42.6 95.2 95.2 95.2c25.2 0 49.5-10 67.3-27.9l56.8-56.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L593.4 424c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L561.4 392c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l67.3-67.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L529.4 360c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3zM68.7 276.7c-6.2 6.2-6.2 16.4 0 22.6L120 350.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L43.3 292.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L88 382.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L27.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L56 414.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L27.3 404.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.8 56.8C79.3 502 103.6 512 128.8 512c52.6 0 95.2-42.6 95.2-95.2l0-32.8 0-53.6c0-11-9-20-20-20s-20 9-20 20l0 19.7c0 7.1-8.6 10.7-13.7 5.7l-79-79c-6.2-6.2-16.4-6.2-22.6 0z" />
    </Icon>
);

export default FaceSmilingHands;