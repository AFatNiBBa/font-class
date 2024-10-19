
import { Icon } from "../../index";

/**
 * A component that renders the `symbols` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/symbols?s=thin symbols}
 * @preview ![symbols](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOCAwTDIxNiAwYzQuNCAwIDggMy42IDggOHMtMy42IDgtOCA4TDggMTZjLTQuNCAwLTgtMy42LTgtOFMzLjYgMCA4IDB6TTggODBsMTA0IDAgMTA0IDBjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDhsLTk2IDAgMCAxMjBjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThsMC0xMjBMOCA5NmMtNC40IDAtOC0zLjYtOC04czMuNi04IDgtOHpNNDk2IDI3LjVjMC01LTQuNi04LjgtOS42LTcuOGwtMTI4IDI1LjZjLTMuNyAuNy02LjQgNC02LjQgNy44TDM1MiAyMDhzMCAwIDAgMGMwIDI2LjUtMjguNyA0OC02NCA0OHMtNjQtMjEuNS02NC00OHMyOC43LTQ4IDY0LTQ4YzE5LjEgMCAzNi4zIDYuMyA0OCAxNi4ybDAtMTIzLjFjMC0xMS40IDguMS0yMS4zIDE5LjMtMjMuNUw0ODMuMyA0QzQ5OC4xIDEgNTEyIDEyLjQgNTEyIDI3LjVMNTEyIDE3NnMwIDAgMCAwYzAgMjYuNS0yOC43IDQ4LTY0IDQ4cy02NC0yMS41LTY0LTQ4czI4LjctNDggNjQtNDhjMTkuMSAwIDM2LjMgNi4zIDQ4IDE2LjNsMC0xMTYuN3pNMzIzLjcgMTg2LjljLTguNi02LjQtMjEuMS0xMC45LTM1LjctMTAuOXMtMjcuMSA0LjQtMzUuNyAxMC45cy0xMi4zIDE0LjEtMTIuMyAyMS4xczMuOCAxNC43IDEyLjMgMjEuMXMyMS4xIDEwLjkgMzUuNyAxMC45czI3LjEtNC40IDM1LjctMTAuOXMxMi4zLTE0LjEgMTIuMy0yMS4xYzAgMCAwIDAgMCAwYzAtNy4xLTMuOC0xNC43LTEyLjMtMjEuMXptMTYwLTMyYy04LjYtNi40LTIxLjEtMTAuOS0zNS43LTEwLjlzLTI3LjEgNC40LTM1LjcgMTAuOXMtMTIuMyAxNC4xLTEyLjMgMjEuMXMzLjggMTQuNyAxMi4zIDIxLjFzMjEuMSAxMC45IDM1LjcgMTAuOXMyNy4xLTQuNCAzNS43LTEwLjlzMTIuMy0xNC4xIDEyLjMtMjEuMWMwIDAgMCAwIDAgMGMwLTcuMS0zLjgtMTQuNy0xMi4zLTIxLjF6TTMyOCAzNTJhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4em0wLTY0YTQwIDQwIDAgMSAxIDAgODAgNDAgNDAgMCAxIDEgMC04MHptMTgxLjcgMi4zYzMuMSAzLjEgMy4xIDguMiAwIDExLjNsLTIwOCAyMDhjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBzLTMuMS04LjIgMC0xMS4zbDIwOC0yMDhjMy4xLTMuMSA4LjItMy4xIDExLjMgMHpNNDk2IDQ3MmEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAwem0tNjQgMGE0MCA0MCAwIDEgMSA4MCAwIDQwIDQwIDAgMSAxIC04MCAwek03Ny4zIDI1Nmw1LjUgMGMyOS40IDAgNTMuMyAyMy44IDUzLjMgNTMuM2MwIDE0LjEtNS42IDI3LjctMTUuNiAzNy43TDkxLjMgMzc2bDU3LjMgNTcuM0wyMDIuNyAzODZjMy4zLTIuOSA4LjQtMi42IDExLjMgLjhzMi42IDguNC0uOCAxMS4zTDE2MCA0NDQuN2w1My43IDUzLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM3MtOC4yIDMuMS0xMS4zIDBsLTU0LjQtNTQuNEw5OC40IDQ5OC41Qzg4LjUgNTA3LjIgNzUuNyA1MTIgNjIuNSA1MTJsLTEuMyAwQzMxLjggNTEyIDggNDg4LjIgOCA0NTguN2MwLTE0LjEgNS42LTI3LjcgMTUuNi0zNy43TDY4LjcgMzc2IDM5LjYgMzQ2LjljLTEwLTEwLTE1LjYtMjMuNS0xNS42LTM3LjdDMjQgMjc5LjggNDcuOCAyNTYgNzcuMyAyNTZ6TTUwLjkgMzM1LjZMODAgMzY0LjdsMjkuMS0yOS4xYzctNyAxMC45LTE2LjUgMTAuOS0yNi4zYzAtMjAuNi0xNi43LTM3LjMtMzcuMy0zNy4zbC01LjUgMEM1Ni43IDI3MiA0MCAyODguNyA0MCAzMDkuM2MwIDkuOSAzLjkgMTkuNCAxMC45IDI2LjN6bS0xNiA5Ni44Yy03IDctMTAuOSAxNi41LTEwLjkgMjYuM0MyNCA0NzkuMyA0MC43IDQ5NiA2MS4zIDQ5NmwxLjMgMGM5LjMgMCAxOC4zLTMuNCAyNS40LTkuNWw0OC43LTQyLjZMODAgMzg3LjMgMzQuOSA0MzIuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Symbols: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 0L216 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 16c-4.4 0-8-3.6-8-8S3.6 0 8 0zM8 80l104 0 104 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0 0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-120L8 96c-4.4 0-8-3.6-8-8s3.6-8 8-8zM496 27.5c0-5-4.6-8.8-9.6-7.8l-128 25.6c-3.7 .7-6.4 4-6.4 7.8L352 208s0 0 0 0c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c19.1 0 36.3 6.3 48 16.2l0-123.1c0-11.4 8.1-21.3 19.3-23.5L483.3 4C498.1 1 512 12.4 512 27.5L512 176s0 0 0 0c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c19.1 0 36.3 6.3 48 16.3l0-116.7zM323.7 186.9c-8.6-6.4-21.1-10.9-35.7-10.9s-27.1 4.4-35.7 10.9s-12.3 14.1-12.3 21.1s3.8 14.7 12.3 21.1s21.1 10.9 35.7 10.9s27.1-4.4 35.7-10.9s12.3-14.1 12.3-21.1c0 0 0 0 0 0c0-7.1-3.8-14.7-12.3-21.1zm160-32c-8.6-6.4-21.1-10.9-35.7-10.9s-27.1 4.4-35.7 10.9s-12.3 14.1-12.3 21.1s3.8 14.7 12.3 21.1s21.1 10.9 35.7 10.9s27.1-4.4 35.7-10.9s12.3-14.1 12.3-21.1c0 0 0 0 0 0c0-7.1-3.8-14.7-12.3-21.1zM328 352a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm181.7 2.3c3.1 3.1 3.1 8.2 0 11.3l-208 208c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l208-208c3.1-3.1 8.2-3.1 11.3 0zM496 472a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-64 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM77.3 256l5.5 0c29.4 0 53.3 23.8 53.3 53.3c0 14.1-5.6 27.7-15.6 37.7L91.3 376l57.3 57.3L202.7 386c3.3-2.9 8.4-2.6 11.3 .8s2.6 8.4-.8 11.3L160 444.7l53.7 53.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-54.4-54.4L98.4 498.5C88.5 507.2 75.7 512 62.5 512l-1.3 0C31.8 512 8 488.2 8 458.7c0-14.1 5.6-27.7 15.6-37.7L68.7 376 39.6 346.9c-10-10-15.6-23.5-15.6-37.7C24 279.8 47.8 256 77.3 256zM50.9 335.6L80 364.7l29.1-29.1c7-7 10.9-16.5 10.9-26.3c0-20.6-16.7-37.3-37.3-37.3l-5.5 0C56.7 272 40 288.7 40 309.3c0 9.9 3.9 19.4 10.9 26.3zm-16 96.8c-7 7-10.9 16.5-10.9 26.3C24 479.3 40.7 496 61.3 496l1.3 0c9.3 0 18.3-3.4 25.4-9.5l48.7-42.6L80 387.3 34.9 432.4z" />
    </Icon>
);

export default Symbols;