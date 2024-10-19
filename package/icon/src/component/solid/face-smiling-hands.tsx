
import { Icon } from "../../index";

/**
 * A component that renders the `face-smiling-hands` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smiling-hands?s=solid face-smiling-hands}
 * @preview ![face-smiling-hands](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDExLjEgNDk1LjNjLTE3LTIxLjYtMjcuMS00OC45LTI3LjEtNzguNWwwLTMwLjhjLTE4LjEgOC40LTM5LjQgMTQtNjQgMTRzLTQ1LjktNS42LTY0LTE0bDAgMzAuOGMwIDI5LjYtMTAuMSA1Ni45LTI3LjEgNzguNWMyOC4zIDEwLjggNTkgMTYuNyA5MS4xIDE2LjdzNjIuOC01LjkgOTEuMS0xNi43ek0zMjAgMEMxODMuMSAwIDcxLjMgMTA3LjUgNjQuMyAyNDIuNmMxNi44LTUuOCAzNi4yLTIgNDkuNiAxMS40TDE2MSAzMDEuMWM5LjQtMTMuNyAyNS4xLTIyLjcgNDMtMjIuN2MyOC43IDAgNTIgMjMuMyA1MiA1MmwwIDE5LjJjMTYuOCAxMC42IDM4LjEgMTguNCA2NCAxOC40czQ3LjItNy43IDY0LTE4LjRsMC0xOS4yYzAtMjguNyAyMy4zLTUyIDUyLTUyYzE3LjkgMCAzMy42IDkgNDMgMjIuN2w0Ny4xLTQ3LjFjMTMuNC0xMy40IDMyLjgtMTcuMiA0OS42LTExLjRDNTY4LjcgMTA3LjUgNDU2LjkgMCAzMjAgMHpNMjgxLjYgMjI4LjhjMCAwIDAgMCAwIDBsLS4yLS4yYy0uMi0uMi0uNC0uNS0uNy0uOWMtLjYtLjgtMS42LTItMi44LTMuNGMtMi41LTIuOC02LTYuNi0xMC4yLTEwLjNjLTguOC03LjgtMTguOC0xNC0yNy43LTE0cy0xOC45IDYuMi0yNy43IDE0Yy00LjIgMy43LTcuNyA3LjUtMTAuMiAxMC4zYy0xLjIgMS40LTIuMiAyLjYtMi44IDMuNGMtLjMgLjQtLjYgLjctLjcgLjlsLS4yIC4yYzAgMCAwIDAgMCAwYzAgMCAwIDAgMCAwczAgMCAwIDBjLTIuMSAyLjgtNS43IDMuOS04LjkgMi44cy01LjUtNC4xLTUuNS03LjZjMC0xNy45IDYuNy0zNS42IDE2LjYtNDguOGM5LjgtMTMgMjMuOS0yMy4yIDM5LjQtMjMuMnMyOS42IDEwLjIgMzkuNCAyMy4yYzkuOSAxMy4yIDE2LjYgMzAuOSAxNi42IDQ4LjhjMCAzLjQtMi4yIDYuNS01LjUgNy42cy02LjkgMC04LjktMi44YzAgMCAwIDAgMCAwczAgMCAwIDBzMCAwIDAgMHptMTYwIDBzMCAwIDAgMGMwIDAgMCAwIDAgMGwtLjItLjJjLS4yLS4yLS40LS41LS43LS45Yy0uNi0uOC0xLjYtMi0yLjgtMy40Yy0yLjUtMi44LTYtNi42LTEwLjItMTAuM2MtOC44LTcuOC0xOC44LTE0LTI3LjctMTRzLTE4LjkgNi4yLTI3LjcgMTRjLTQuMiAzLjctNy43IDcuNS0xMC4yIDEwLjNjLTEuMiAxLjQtMi4yIDIuNi0yLjggMy40Yy0uMyAuNC0uNiAuNy0uNyAuOWwtLjIgLjJjMCAwIDAgMCAwIDBjMCAwIDAgMCAwIDBzMCAwIDAgMGMtMi4xIDIuOC01LjcgMy45LTguOSAyLjhzLTUuNS00LjEtNS41LTcuNmMwLTE3LjkgNi43LTM1LjYgMTYuNi00OC44YzkuOC0xMyAyMy45LTIzLjIgMzkuNC0yMy4yczI5LjYgMTAuMiAzOS40IDIzLjJjOS45IDEzLjIgMTYuNiAzMC45IDE2LjYgNDguOGMwIDMuNC0yLjIgNi41LTUuNSA3LjZzLTYuOSAwLTguOS0yLjhjMCAwIDAgMCAwIDBzMCAwIDAgMHpNNjguNyAyOTkuM0wxMjAgMzUwLjZjMi42IDIuNiAyLjYgNi44IDAgOS40cy02LjggMi42LTkuNCAwTDQzLjMgMjkyLjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZMODggMzgyLjZjMi42IDIuNiAyLjYgNi44IDAgOS40cy02LjggMi42LTkuNCAwTDI3LjMgMzQwLjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZMNTYgNDE0LjZjMi42IDIuNiAyLjYgNi44IDAgOS40cy02LjggMi42LTkuNCAwTDI3LjMgNDA0LjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZsNTYuOCA1Ni44Qzc5LjMgNTAyIDEwMy42IDUxMiAxMjguOCA1MTJjNTIuNiAwIDk1LjItNDIuNiA5NS4yLTk1LjJsMC0zMi44IDAtNTMuNmMwLTExLTktMjAtMjAtMjBzLTIwIDktMjAgMjBsMCAxOS43YzAgNy4xLTguNiAxMC43LTEzLjcgNS43bC03OS03OWMtNi4yLTYuMi0xNi40LTYuMi0yMi42IDBzLTYuMiAxNi40IDAgMjIuNnptNTAyLjYgMGM2LjItNi4yIDYuMi0xNi40IDAtMjIuNnMtMTYuNC02LjItMjIuNiAwbC03OSA3OWMtNSA1LTEzLjcgMS41LTEzLjctNS43bDAtMTkuN2MwLTExLTktMjAtMjAtMjBzLTIwIDktMjAgMjBsMCA1My42IDAgMzIuOGMwIDUyLjYgNDIuNiA5NS4yIDk1LjIgOTUuMmMyNS4yIDAgNDkuNS0xMCA2Ny4zLTI3LjlsNTYuOC01Ni44YzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMNTkzLjQgNDI0Yy0yLjYgMi42LTYuOCAyLjYtOS40IDBzLTIuNi02LjggMC05LjRsNTEuMy01MS4zYzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMNTYxLjQgMzkyYy0yLjYgMi42LTYuOCAyLjYtOS40IDBzLTIuNi02LjggMC05LjRsNjcuMy02Ny4zYzYuMi02LjIgNi4yLTE2LjQgMC0yMi42cy0xNi40LTYuMi0yMi42IDBMNTI5LjQgMzYwYy0yLjYgMi42LTYuOCAyLjYtOS40IDBzLTIuNi02LjggMC05LjRsNTEuMy01MS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FaceSmilingHands: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M411.1 495.3c-17-21.6-27.1-48.9-27.1-78.5l0-30.8c-18.1 8.4-39.4 14-64 14s-45.9-5.6-64-14l0 30.8c0 29.6-10.1 56.9-27.1 78.5c28.3 10.8 59 16.7 91.1 16.7s62.8-5.9 91.1-16.7zM320 0C183.1 0 71.3 107.5 64.3 242.6c16.8-5.8 36.2-2 49.6 11.4L161 301.1c9.4-13.7 25.1-22.7 43-22.7c28.7 0 52 23.3 52 52l0 19.2c16.8 10.6 38.1 18.4 64 18.4s47.2-7.7 64-18.4l0-19.2c0-28.7 23.3-52 52-52c17.9 0 33.6 9 43 22.7l47.1-47.1c13.4-13.4 32.8-17.2 49.6-11.4C568.7 107.5 456.9 0 320 0zM281.6 228.8c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0zm160 0s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zM68.7 299.3L120 350.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L43.3 292.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L88 382.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L27.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L56 414.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L27.3 404.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.8 56.8C79.3 502 103.6 512 128.8 512c52.6 0 95.2-42.6 95.2-95.2l0-32.8 0-53.6c0-11-9-20-20-20s-20 9-20 20l0 19.7c0 7.1-8.6 10.7-13.7 5.7l-79-79c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zm502.6 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-79 79c-5 5-13.7 1.5-13.7-5.7l0-19.7c0-11-9-20-20-20s-20 9-20 20l0 53.6 0 32.8c0 52.6 42.6 95.2 95.2 95.2c25.2 0 49.5-10 67.3-27.9l56.8-56.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L593.4 424c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L561.4 392c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l67.3-67.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L529.4 360c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3z" />
    </Icon>
);

export default FaceSmilingHands;