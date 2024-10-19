
import { Icon } from "../../index";

/**
 * A component that renders the `face-beam-hand-over-mouth` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-beam-hand-over-mouth?s=thin face-beam-hand-over-mouth}
 * @preview ![face-beam-hand-over-mouth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjU2QzE2IDEyMy41IDEyMy41IDE2IDI1NiAxNnMyNDAgMTA3LjUgMjQwIDI0MGMwIDk5LjYtNjAuNyAxODUtMTQ3LjEgMjIxLjRjLTQuMSAxLjctNiA2LjQtNC4zIDEwLjVzNi40IDYgMTAuNSA0LjNDNDQ3LjMgNDUzLjQgNTEyIDM2Mi4zIDUxMiAyNTZDNTEyIDExNC42IDM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NmMwIDg2IDQyLjQgMTYyIDEwNy4zIDIwOC40YzMuNiAyLjYgOC42IDEuNyAxMS4yLTEuOXMxLjctOC42LTEuOS0xMS4yQzU1LjcgNDA3LjkgMTYgMzM2LjYgMTYgMjU2em0xMTkuNy00Ni41YzIuNS0xMy41IDcuOC0yOC40IDE1LjItMzkuOGM3LjYtMTEuNiAxNi4xLTE3LjcgMjQuOS0xNy43czE3LjMgNi4xIDI0LjkgMTcuN2M3LjQgMTEuNCAxMi43IDI2LjMgMTUuMiAzOS44Yy44IDQuMyA1IDcuMiA5LjMgNi40czcuMi01IDYuNC05LjNjLTIuOC0xNS04LjctMzItMTcuNi00NS42Yy04LjctMTMuMy0yMS41LTI1LTM4LjMtMjVzLTI5LjYgMTEuNy0zOC4zIDI1Yy04LjggMTMuNS0xNC44IDMwLjYtMTcuNiA0NS42Yy0uOCA0LjMgMiA4LjUgNi40IDkuM3M4LjUtMiA5LjMtNi40em0xNzUuMi0zOS44YzcuNi0xMS42IDE2LjEtMTcuNyAyNC45LTE3LjdzMTcuMyA2LjEgMjQuOSAxNy43YzcuNCAxMS40IDEyLjcgMjYuMyAxNS4yIDM5LjhjLjggNC4zIDUgNy4yIDkuMyA2LjRzNy4yLTUgNi40LTkuM2MtMi44LTE1LTguNy0zMi0xNy42LTQ1LjZjLTguNy0xMy4zLTIxLjUtMjUtMzguMy0yNXMtMjkuNiAxMS43LTM4LjMgMjVjLTguOCAxMy41LTE0LjggMzAuNi0xNy42IDQ1LjZjLS44IDQuMyAyIDguNSA2LjQgOS4zczguNS0yIDkuMy02LjRjMi41LTEzLjUgNy44LTI4LjQgMTUuMi0zOS44em0tMi4yIDEyM2w5LjItOS4yIDYuOC02LjhjNi4yLTYuMiAxNi40LTYuMiAyMi42IDBzNi4yIDE2LjQgMCAyMi42bC02LjggNi44LTkuMiA5LjItNDYuNiA0Ni42LTQuNyA0LjdjLTIuNiAyLjYtMi42IDYuOCAwIDkuNHM2LjggMi42IDkuNCAwbDQuNy00LjcgNDYuNi00Ni42YzIuMy0yLjMgNS4yLTMuOCA4LjMtNC40YzUtMSAxMC40IC41IDE0LjMgNC40YzYuMiA2LjIgNi4yIDE2LjQgMCAyMi42bC0yMi44IDIyLjgtOS4yIDkuMi0xNC42IDE0LjYtNC43IDQuN2MtMi42IDIuNi0yLjYgNi44IDAgOS40czYuOCAyLjYgOS40IDBsNC43LTQuNyAxNC42LTE0LjZjMi4zLTIuMyA1LjItMy44IDguMy00LjRjNS0xIDEwLjQgLjUgMTQuMyA0LjRjNi4yIDYuMiA2LjIgMTYuNCAwIDIyLjZsLTU2LjggNTYuOEMyODguNyA0ODYgMjY0LjQgNDk2IDIzOS4yIDQ5NmMtNTIuNiAwLTk1LjItNDIuNi05NS4yLTk1LjJsMC0zMi44IDAtNTMuNmMwLTExIDktMjAgMjAtMjBzMjAgOSAyMCAyMGwwIDE5LjdjMCA3LjEgOC42IDEwLjcgMTMuNyA1LjdsNzktNzljNi4yLTYuMiAxNi40LTYuMiAyMi42IDBjMy45IDMuOSA1LjQgOS4zIDQuNCAxNC4zYy0uNiAzLTIgNS45LTQuNCA4LjNsLTQ2LjYgNDYuNi00LjcgNC43Yy0yLjYgMi42LTIuNiA2LjggMCA5LjRzNi44IDIuNiA5LjQgMGw0LjctNC43IDQ2LjYtNDYuNnptMS45LTQzLjNjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwTDIwMCAzMTQuN2wwLS4zYzAtMTkuOS0xNi4xLTM2LTM2LTM2cy0zNiAxNi4xLTM2IDM2bDAgNTMuNiAwIDMyLjhDMTI4IDQ2Mi4yIDE3Ny44IDUxMiAyMzkuMiA1MTJjMjkuNSAwIDU3LjgtMTEuNyA3OC42LTMyLjZsNTYuOC01Ni44YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zYy0zLjMtMy4zLTcuMi01LjgtMTEuNC03LjNsMTEuNC0xMS40YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zYy0zLjUtMy41LTcuNi02LTEyLTcuNmM4LjMtMTIuNCA3LTI5LjQtNC00MC40cy0yOC0xMi4zLTQwLjQtNGMtMS41LTQuNC00LjEtOC41LTcuNi0xMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceBeamHandOverMouth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240c0 99.6-60.7 185-147.1 221.4c-4.1 1.7-6 6.4-4.3 10.5s6.4 6 10.5 4.3C447.3 453.4 512 362.3 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 86 42.4 162 107.3 208.4c3.6 2.6 8.6 1.7 11.2-1.9s1.7-8.6-1.9-11.2C55.7 407.9 16 336.6 16 256zm119.7-46.5c2.5-13.5 7.8-28.4 15.2-39.8c7.6-11.6 16.1-17.7 24.9-17.7s17.3 6.1 24.9 17.7c7.4 11.4 12.7 26.3 15.2 39.8c.8 4.3 5 7.2 9.3 6.4s7.2-5 6.4-9.3c-2.8-15-8.7-32-17.6-45.6c-8.7-13.3-21.5-25-38.3-25s-29.6 11.7-38.3 25c-8.8 13.5-14.8 30.6-17.6 45.6c-.8 4.3 2 8.5 6.4 9.3s8.5-2 9.3-6.4zm175.2-39.8c7.6-11.6 16.1-17.7 24.9-17.7s17.3 6.1 24.9 17.7c7.4 11.4 12.7 26.3 15.2 39.8c.8 4.3 5 7.2 9.3 6.4s7.2-5 6.4-9.3c-2.8-15-8.7-32-17.6-45.6c-8.7-13.3-21.5-25-38.3-25s-29.6 11.7-38.3 25c-8.8 13.5-14.8 30.6-17.6 45.6c-.8 4.3 2 8.5 6.4 9.3s8.5-2 9.3-6.4c2.5-13.5 7.8-28.4 15.2-39.8zm-2.2 123l9.2-9.2 6.8-6.8c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-6.8 6.8-9.2 9.2-46.6 46.6-4.7 4.7c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l4.7-4.7 46.6-46.6c2.3-2.3 5.2-3.8 8.3-4.4c5-1 10.4 .5 14.3 4.4c6.2 6.2 6.2 16.4 0 22.6l-22.8 22.8-9.2 9.2-14.6 14.6-4.7 4.7c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l4.7-4.7 14.6-14.6c2.3-2.3 5.2-3.8 8.3-4.4c5-1 10.4 .5 14.3 4.4c6.2 6.2 6.2 16.4 0 22.6l-56.8 56.8C288.7 486 264.4 496 239.2 496c-52.6 0-95.2-42.6-95.2-95.2l0-32.8 0-53.6c0-11 9-20 20-20s20 9 20 20l0 19.7c0 7.1 8.6 10.7 13.7 5.7l79-79c6.2-6.2 16.4-6.2 22.6 0c3.9 3.9 5.4 9.3 4.4 14.3c-.6 3-2 5.9-4.4 8.3l-46.6 46.6-4.7 4.7c-2.6 2.6-2.6 6.8 0 9.4s6.8 2.6 9.4 0l4.7-4.7 46.6-46.6zm1.9-43.3c-12.5-12.5-32.8-12.5-45.3 0L200 314.7l0-.3c0-19.9-16.1-36-36-36s-36 16.1-36 36l0 53.6 0 32.8C128 462.2 177.8 512 239.2 512c29.5 0 57.8-11.7 78.6-32.6l56.8-56.8c12.5-12.5 12.5-32.8 0-45.3c-3.3-3.3-7.2-5.8-11.4-7.3l11.4-11.4c12.5-12.5 12.5-32.8 0-45.3c-3.5-3.5-7.6-6-12-7.6c8.3-12.4 7-29.4-4-40.4s-28-12.3-40.4-4c-1.5-4.4-4.1-8.5-7.6-12z" />
    </Icon>
);

export default FaceBeamHandOverMouth;