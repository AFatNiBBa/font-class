
import { Icon } from "../../index";

/**
 * A component that renders the `hippo` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hippo?s=thin hippo}
 * @preview ![hippo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDExIDEwOC4xYy03IDEwLjItMTEgMjIuNi0xMSAzNS45bDAgMTZjMCAxNS41LTcuNyAyOC4zLTE1LjggMzcuNEMzNzQuMSAyMDguOCAzNjggMjIzLjYgMzY4IDI0MGMwIDMwLjkgMjIgNTYuOCA1MS4yIDYyLjdsNi4zIDEuMyA2LjUgMCA0MCAwIDE2IDAgNDggMCAxNiAwIDggMGM5LjEgMCAxNy44LTEuOSAyNS42LTUuM2w2LjgtMyA2LTQuNUM2MTQgMjc5LjUgNjI0IDI2MC45IDYyNCAyNDBjMC05LjItMS45LTE3LjktNS40LTI1LjhjLTUuNy04LjUtMTUuNS0xNC4yLTI2LjYtMTQuMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThjMC0yNi4yIDIxLTQ3LjUgNDctNDhjLTEuNi0uOS0zLjItMS43LTQuOS0yLjRDNTczIDE3NS43IDU2MCAxNjIuNCA1NjAgMTQ0YzAtMTAtMi4zLTE5LjQtNi4zLTI3LjhsLTUtMTAuMiA4LTggNi42LTYuNmM2LjItNi4yIDYuMi0xNi40IDAtMjIuNnMtMTYuNC02LjItMjIuNiAwTDUzMC42IDc4LjhsLTYuOCA2LjgtOS4yLTIuOEM1MDguOCA4MSA1MDIuNSA4MCA0OTYgODBsLTMyIDBjLTIuOCAwLTUuNSAuMi04LjEgLjVsLTcuOCAxLTUuNS01LjVMNDI3LjMgNjAuN2MtNi4yLTYuMi0xNi40LTYuMi0yMi42IDBzLTYuMiAxNi40IDAgMjIuNmw0LjQgNC40IDkuNCA5LjRMNDExIDEwOC4xek02MzkuOCAyMzMuOWMuMiAyIC4yIDQgLjIgNi4xYzAgMjYuMi0xMi42IDQ5LjQtMzIgNjRsMCA5LjMgMCAyMi43YzAgMTMuMy0xMC43IDI0LTI0IDI0bC0yNCAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTE2LTE2IDAtMTYgMC0xNiAwIDAgMTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTI0IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0bDAtMTYgMC0xLjZjLTM2LjUtNy40LTY0LTM5LjctNjQtNzguNGMwLTIwLjQgNy43LTM5LjEgMjAuMy01My4yYzYuNy03LjUgMTEuNy0xNi43IDExLjctMjYuOGwwLTE2YzAtMTUuMSA0LjItMjkuMiAxMS40LTQxLjJsLTI0LjItOS4xQzM0NyA4NC43IDMyMS4zIDgwIDI5NS40IDgwTDIxNiA4MEMxMjMuMiA4MCA0OCAxNTUuMiA0OCAyNDhsMCA4czAgMCAwIDBsMCAzNS4xYzAgMzAuOS0xMC41IDYwLjktMjkuOCA4NUwxNC4yIDM4MWMtMi44IDMuNC03LjggNC0xMS4yIDEuMnMtNC03LjgtMS4yLTExLjJsMy45LTQuOWMxNy0yMS4zIDI2LjMtNDcuNyAyNi4zLTc1TDMyIDI1NnMwIDAgMCAwbDAtOEMzMiAxNDYuNCAxMTQuNCA2NCAyMTYgNjRsNzkuNCAwYzI3LjggMCA1NS40IDUgODEuNSAxNC44bDguOCAzLjNjLTMuNy0xMS4xLTEuMS0yMy44IDcuOC0zMi43YzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwbDE1LjMgMTUuM2MzLjMtLjQgNi43LS42IDEwLjEtLjZsMzIgMGM4LjEgMCAxNS45IDEuMiAyMy4zIDMuNGwxMC4xLTEwLjFjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBzMTIuNSAzMi44IDAgNDUuM2wtNi42IDYuNmM1LjEgMTAuNSA3LjkgMjIuMyA3LjkgMzQuOGMwIDEwLjIgNy40IDE4LjggMTYuNyAyM2MxNy42IDcuOSAzMS44IDIyIDM5LjkgMzkuNWM0LjcgNy40IDcuMyAxNi4xIDcuMyAyNS41YzAgLjctLjEgMS4zLS4yIDEuOXpNNTkyIDMxMy4zYy01LjEgMi4yLTEwLjQgMy45LTE2IDUuMWMtNS4yIDEtMTAuNSAxLjYtMTYgMS42bC04IDAgMCAxNmMwIDQuNCAzLjYgOCA4IDhsMjQgMGM0LjQgMCA4LTMuNiA4LThsMC01LjUgMC0xNy4yek00NDAgMzQ0bDI0IDBjNC40IDAgOC0zLjYgOC04bDAtMTYtMTYgMC04IDAtMTYgMCAwIDE2YzAgNC40IDMuNiA4IDggOHptLTggMzkuM2MyLjYgLjQgNS4zIC43IDggLjdsOCAwIDAgNTZjMCAyMi4xLTE3LjkgNDAtNDAgNDBsLTQ4IDBjLTIyLjEgMC00MC0xNy45LTQwLTQwbDAtNjguOS01LjggMS45Yy0zNy44IDEyLjYtNzguNiAxMi42LTExNi40IDBsLTUuOC0xLjkgMCA2OC45YzAgMjIuMS0xNy45IDQwLTQwIDQwbC00OCAwYy0yMi4xIDAtNDAtMTcuOS00MC00MGwwLTk2YzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDhsMCA5NmMwIDEzLjMgMTAuNyAyNCAyNCAyNGw0OCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtODBjMC0yLjYgMS4yLTUgMy4zLTYuNXM0LjgtMS45IDcuMi0xLjFsMTYuMyA1LjRjMzQuNSAxMS41IDcxLjggMTEuNSAxMDYuMyAwbDE2LjMtNS40YzIuNC0uOCA1LjEtLjQgNy4yIDEuMXMzLjMgMy45IDMuMyA2LjVsMCA4MGMwIDEzLjMgMTAuNyAyNCAyNCAyNGw0OCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtNTYuN3pNNDY0IDEyOGExNiAxNiAwIDEgMSAwIDMyIDE2IDE2IDAgMSAxIDAtMzJ6bTQ4IDE2YTE2IDE2IDAgMSAxIDMyIDAgMTYgMTYgMCAxIDEgLTMyIDB6bS01NiA1NmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThjMC0yNi41IDIxLjUtNDggNDgtNDhzNDggMjEuNSA0OCA0OGMwIDQuNC0zLjYgOC04IDhzLTgtMy42LTgtOGMwLTE3LjctMTQuMy0zMi0zMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hippo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M411 108.1c-7 10.2-11 22.6-11 35.9l0 16c0 15.5-7.7 28.3-15.8 37.4C374.1 208.8 368 223.6 368 240c0 30.9 22 56.8 51.2 62.7l6.3 1.3 6.5 0 40 0 16 0 48 0 16 0 8 0c9.1 0 17.8-1.9 25.6-5.3l6.8-3 6-4.5C614 279.5 624 260.9 624 240c0-9.2-1.9-17.9-5.4-25.8c-5.7-8.5-15.5-14.2-26.6-14.2c-17.7 0-32 14.3-32 32c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-26.2 21-47.5 47-48c-1.6-.9-3.2-1.7-4.9-2.4C573 175.7 560 162.4 560 144c0-10-2.3-19.4-6.3-27.8l-5-10.2 8-8 6.6-6.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L530.6 78.8l-6.8 6.8-9.2-2.8C508.8 81 502.5 80 496 80l-32 0c-2.8 0-5.5 .2-8.1 .5l-7.8 1-5.5-5.5L427.3 60.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l4.4 4.4 9.4 9.4L411 108.1zM639.8 233.9c.2 2 .2 4 .2 6.1c0 26.2-12.6 49.4-32 64l0 9.3 0 22.7c0 13.3-10.7 24-24 24l-24 0c-13.3 0-24-10.7-24-24l0-16-16 0-16 0-16 0 0 16c0 13.3-10.7 24-24 24l-24 0c-13.3 0-24-10.7-24-24l0-16 0-1.6c-36.5-7.4-64-39.7-64-78.4c0-20.4 7.7-39.1 20.3-53.2c6.7-7.5 11.7-16.7 11.7-26.8l0-16c0-15.1 4.2-29.2 11.4-41.2l-24.2-9.1C347 84.7 321.3 80 295.4 80L216 80C123.2 80 48 155.2 48 248l0 8s0 0 0 0l0 35.1c0 30.9-10.5 60.9-29.8 85L14.2 381c-2.8 3.4-7.8 4-11.2 1.2s-4-7.8-1.2-11.2l3.9-4.9c17-21.3 26.3-47.7 26.3-75L32 256s0 0 0 0l0-8C32 146.4 114.4 64 216 64l79.4 0c27.8 0 55.4 5 81.5 14.8l8.8 3.3c-3.7-11.1-1.1-23.8 7.8-32.7c12.5-12.5 32.8-12.5 45.3 0l15.3 15.3c3.3-.4 6.7-.6 10.1-.6l32 0c8.1 0 15.9 1.2 23.3 3.4l10.1-10.1c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-6.6 6.6c5.1 10.5 7.9 22.3 7.9 34.8c0 10.2 7.4 18.8 16.7 23c17.6 7.9 31.8 22 39.9 39.5c4.7 7.4 7.3 16.1 7.3 25.5c0 .7-.1 1.3-.2 1.9zM592 313.3c-5.1 2.2-10.4 3.9-16 5.1c-5.2 1-10.5 1.6-16 1.6l-8 0 0 16c0 4.4 3.6 8 8 8l24 0c4.4 0 8-3.6 8-8l0-5.5 0-17.2zM440 344l24 0c4.4 0 8-3.6 8-8l0-16-16 0-8 0-16 0 0 16c0 4.4 3.6 8 8 8zm-8 39.3c2.6 .4 5.3 .7 8 .7l8 0 0 56c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-68.9-5.8 1.9c-37.8 12.6-78.6 12.6-116.4 0l-5.8-1.9 0 68.9c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-96c0-4.4 3.6-8 8-8s8 3.6 8 8l0 96c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-80c0-2.6 1.2-5 3.3-6.5s4.8-1.9 7.2-1.1l16.3 5.4c34.5 11.5 71.8 11.5 106.3 0l16.3-5.4c2.4-.8 5.1-.4 7.2 1.1s3.3 3.9 3.3 6.5l0 80c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56.7zM464 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-56 56c-17.7 0-32 14.3-32 32c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-26.5 21.5-48 48-48s48 21.5 48 48c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default Hippo;