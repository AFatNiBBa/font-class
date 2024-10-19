
import { Icon } from "../../index";

/**
 * A component that renders the `hands` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands?s=thin hands}
 * @preview ![hands](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYwIDEzNmwwIDkwLjVjMCA1Ni41LTI5LjkgMTA4LjgtNzguNiAxMzcuNWMtMTEuNiA2LjgtMjMuNyAxMi0zNi4xIDE1LjZjLTEgNS45LTIuMiAxMS44LTMuOCAxNy42YzE2LjUtNCAzMi42LTEwLjQgNDcuOS0xOS40YzUzLjYtMzEuNSA4Ni41LTg5LjEgODYuNS0xNTEuM2wwLTkwLjVjMC0yMi4xLTE3LjktNDAtNDAtNDBzLTQwIDE3LjktNDAgNDBsMCAyNS43TDQxNS42IDIyLjRDNDA0LjUgMy4yIDM4MC0zLjMgMzYwLjkgNy43Yy03LjggNC41LTEzLjUgMTEuMi0xNi44IDE4LjlDMzMzLjEgNy41IDMwOC42IDEgMjg5LjUgMTJzLTI1LjcgMzUuNS0xNC42IDU0LjZjLTguMy0xLTE3IC42LTI0LjggNS4xYy0xOS4xIDExLTI1LjcgMzUuNS0xNC42IDU0LjZsMS42IDIuOGM1IC45IDEwIDIuNCAxNC45IDQuNWw4LjEgMy40LTEwLjgtMTguN2MtNi42LTExLjUtMi43LTI2LjIgOC44LTMyLjhjMTEuNS02LjYgMjYuMS0yLjcgMzIuOCA4LjhjMCAwIDAgMCAwIDBsNDIuNSA3My43YzkuNiA0LjQgMTguNyA5LjUgMjcuMyAxNS4zbC01Ni05N2MwIDAgMCAwIDAgMGwtMTYtMjcuN2MtNi42LTExLjUtMi43LTI2LjIgOC44LTMyLjhzMjYuMi0yLjcgMzIuOCA4LjhsMTYgMjcuN2MwIDAgMCAwIDAgMGw2NCAxMTAuOWMyLjIgMy44IDcuMSA1LjEgMTAuOSAyLjlzNS4xLTcuMSAyLjktMTAuOWwtNjQtMTEwLjhjMCAwIDAgMCAwIDBjLTYuNi0xMS41LTIuNy0yNi4yIDguOC0zMi44czI2LjItMi43IDMyLjggOC44bDk1LjQgMTY1LjJjMS44IDMuMSA1LjUgNC43IDkgMy43czUuOS00LjEgNS45LTcuN2wwLTU1LjVjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHpNMjMzLjMgMTc3LjlsNzUuNSAzMS44QzM2NC4xIDIzMi45IDQwMCAyODcgNDAwIDM0N2MwIDgyLjMtNjYuNyAxNDktMTQ5IDE0OWwtMTQ3IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0YzAtMTMuMiAxMC43LTI0IDI0LTI0YzAgMCAwIDAgMCAwbDk2IDBjNC40IDAgOC0zLjYgOC04cy0zLjYtOC04LThsLTk2IDBjMCAwIDAgMCAwIDBsLTMyIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0YzAtMTMuMiAxMC43LTI0IDI0LTI0YzAgMCAwIDAgMCAwbDEyOCAwYzQuNCAwIDgtMy42IDgtOHMtMy42LTgtOC04TDcyIDM2OGMwIDAgMCAwIDAgMGwtMzIgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGwzMiAwYzAgMCAwIDAgMCAwbDEyOCAwYzQuNCAwIDgtMy42IDgtOHMtMy42LTgtOC04TDcyIDMwNGMwIDAgMCAwIDAgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGwxODMuNSAwYzMuOCAwIDcuMS0yLjcgNy44LTYuNHMtMS4yLTcuNS00LjctOWwtNDQtMTguNWMtMTIuMi01LjEtMTcuOS0xOS4yLTEyLjgtMzEuNHMxOS4yLTE3LjkgMzEuNC0xMi44ek03MiA0NDhjLTUgNi43LTggMTUtOCAyNGMwIDIyLjEgMTcuOSA0MCA0MCA0MGwxNDcgMGM5MS4xIDAgMTY1LTczLjkgMTY1LTE2NWMwLTY2LjQtMzkuOC0xMjYuMy0xMDEtMTUyLjFsLTc1LjUtMzEuOGMtMjAuNC04LjYtNDMuOCAxLTUyLjQgMjEuM3MxIDQzLjggMjEuMyA1Mi40bDcuNCAzLjFMNzIgMjQwYy0yMi4xIDAtNDAgMTcuOS00MCA0MGMwIDkgMyAxNy4zIDggMjRjLTIyLjEgMC00MCAxNy45LTQwIDQwczE3LjkgNDAgNDAgNDBjLTUgNi43LTggMTUtOCAyNGMwIDIyLjEgMTcuOSA0MCA0MCA0MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hands: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 136l0 90.5c0 56.5-29.9 108.8-78.6 137.5c-11.6 6.8-23.7 12-36.1 15.6c-1 5.9-2.2 11.8-3.8 17.6c16.5-4 32.6-10.4 47.9-19.4c53.6-31.5 86.5-89.1 86.5-151.3l0-90.5c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 25.7L415.6 22.4C404.5 3.2 380-3.3 360.9 7.7c-7.8 4.5-13.5 11.2-16.8 18.9C333.1 7.5 308.6 1 289.5 12s-25.7 35.5-14.6 54.6c-8.3-1-17 .6-24.8 5.1c-19.1 11-25.7 35.5-14.6 54.6l1.6 2.8c5 .9 10 2.4 14.9 4.5l8.1 3.4-10.8-18.7c-6.6-11.5-2.7-26.2 8.8-32.8c11.5-6.6 26.1-2.7 32.8 8.8c0 0 0 0 0 0l42.5 73.7c9.6 4.4 18.7 9.5 27.3 15.3l-56-97c0 0 0 0 0 0l-16-27.7c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l16 27.7c0 0 0 0 0 0l64 110.9c2.2 3.8 7.1 5.1 10.9 2.9s5.1-7.1 2.9-10.9l-64-110.8c0 0 0 0 0 0c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l95.4 165.2c1.8 3.1 5.5 4.7 9 3.7s5.9-4.1 5.9-7.7l0-55.5c0-13.3 10.7-24 24-24s24 10.7 24 24zM233.3 177.9l75.5 31.8C364.1 232.9 400 287 400 347c0 82.3-66.7 149-149 149l-147 0c-13.3 0-24-10.7-24-24c0-13.2 10.7-24 24-24c0 0 0 0 0 0l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0c0 0 0 0 0 0l-32 0c-13.3 0-24-10.7-24-24c0-13.2 10.7-24 24-24c0 0 0 0 0 0l128 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 368c0 0 0 0 0 0l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0c0 0 0 0 0 0l128 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 304c0 0 0 0 0 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l183.5 0c3.8 0 7.1-2.7 7.8-6.4s-1.2-7.5-4.7-9l-44-18.5c-12.2-5.1-17.9-19.2-12.8-31.4s19.2-17.9 31.4-12.8zM72 448c-5 6.7-8 15-8 24c0 22.1 17.9 40 40 40l147 0c91.1 0 165-73.9 165-165c0-66.4-39.8-126.3-101-152.1l-75.5-31.8c-20.4-8.6-43.8 1-52.4 21.3s1 43.8 21.3 52.4l7.4 3.1L72 240c-22.1 0-40 17.9-40 40c0 9 3 17.3 8 24c-22.1 0-40 17.9-40 40s17.9 40 40 40c-5 6.7-8 15-8 24c0 22.1 17.9 40 40 40z" />
    </Icon>
);

export default Hands;