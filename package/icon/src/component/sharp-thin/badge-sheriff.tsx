
import { Icon } from "../../index";

/**
 * A component that renders the `badge-sheriff` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge-sheriff?s=sharp-thin badge-sheriff}
 * @preview ![badge-sheriff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBjLTMwLjkgMC01NiAyNS4xLTU2IDU2YzAgMTYuMyA3IDMxIDE4LjEgNDEuMmwtMjcgNDYuMy00OS41IC4yYy00LTEzLjEtMTIuOC0yNC44LTI1LjYtMzIuMkM1Ny4yIDk2IDIzIDEwNS4yIDcuNSAxMzJTMS4yIDE5MyAyOCAyMDguNWMxMy4zIDcuNyAyOC40IDkuMyA0Mi4yIDUuN0w5NC4xIDI1NiA3MC4yIDI5Ny44Yy0xMy44LTMuNi0yOC45LTItNDIuMiA1LjdDMS4yIDMxOS04IDM1My4yIDcuNSAzODBTNTcuMiA0MTYgODQgNDAwLjVjMTIuOC03LjQgMjEuNi0xOS4xIDI1LjYtMzIuMmw0OS41IC4yIDI3IDQ2LjNDMTc1IDQyNSAxNjggNDM5LjcgMTY4IDQ1NmMwIDMwLjkgMjUuMSA1NiA1NiA1NnM1Ni0yNS4xIDU2LTU2YzAtMTYuMy03LTMxLTE4LjEtNDEuMmwyNy00Ni4zIDQ5LjUtLjJjNCAxMy4xIDEyLjggMjQuOCAyNS42IDMyLjJjMjYuOCAxNS41IDYxIDYuMyA3Ni41LTIwLjVzNi4zLTYxLTIwLjUtNzYuNWMtMTMuMy03LjctMjguNS05LjMtNDIuMi01LjdMMzUzLjkgMjU2bDIzLjktNDEuOGMxMy44IDMuNiAyOC45IDIgNDIuMi01LjdjMjYuOC0xNS41IDM2LTQ5LjcgMjAuNS03Ni41UzM5MC44IDk2IDM2NCAxMTEuNWMtMTIuOCA3LjQtMjEuNiAxOS4xLTI1LjYgMzIuMmwtNDkuNS0uMi0yNy00Ni4zQzI3MyA4NyAyODAgNzIuMyAyODAgNTZjMC0zMC45LTI1LjEtNTYtNTYtNTZ6TTE4NCA1NmMwLTIyLjEgMTcuOS00MCA0MC00MHM0MCAxNy45IDQwIDQwYzAgMTMuNS02LjcgMjUuNS0xNyAzMi44TDI0MSA5M2wzLjcgNi4zIDMyLjggNTYuMiAyLjMgNCA0LjYgMCA2MC40IC4yIDYuOCAwIDEuMi02LjZjMi0xMS4zIDguNy0yMS42IDE5LjQtMjcuOGMxOS4xLTExIDQzLjYtNC41IDU0LjYgMTQuNnM0LjUgNDMuNi0xNC42IDU0LjZjLTExLjEgNi40LTIzLjkgNi45LTM0LjkgMi41bC02LjUtMi42LTMuNSA2TDMzNy43IDI1MmwtMi4zIDQgMi4zIDQgMjkuNCA1MS41IDMuNSA2IDYuNS0yLjZjMTEtNC40IDIzLjktMy45IDM0LjkgMi41YzE5LjEgMTEgMjUuNyAzNS41IDE0LjYgNTQuNnMtMzUuNSAyNS43LTU0LjYgMTQuNmMtMTAuNy02LjItMTcuNC0xNi41LTE5LjQtMjcuOGwtMS4yLTYuNi02LjggMC02MC40IC4yLTQuNiAwLTIuMyA0LTMyLjggNTYuMkwyNDEgNDE5bDYgNC4yYzEwLjMgNy4zIDE3IDE5LjIgMTcgMzIuOGMwIDIyLjEtMTcuOSA0MC00MCA0MHMtNDAtMTcuOS00MC00MGMwLTEzLjUgNi43LTI1LjUgMTctMzIuOGw2LTQuMi0zLjctNi4zLTMyLjgtNTYuMi0yLjMtNC00LjYgMC02MC40LS4yLTYuOCAwLTEuMiA2LjZjLTIgMTEuMy04LjcgMjEuNi0xOS40IDI3LjhjLTE5LjEgMTEtNDMuNiA0LjUtNTQuNi0xNC42cy00LjUtNDMuNiAxNC42LTU0LjZjMTEuMS02LjQgMjMuOS02LjkgMzQuOS0yLjVsNi41IDIuNiAzLjUtNkwxMTAuMyAyNjBsMi4zLTQtMi4zLTRMODAuOSAyMDAuNmwtMy41LTYtNi41IDIuNmMtMTEgNC40LTIzLjkgMy45LTM0LjktMi41Yy0xOS4xLTExLTI1LjctMzUuNS0xNC42LTU0LjZzMzUuNS0yNS43IDU0LjYtMTQuNmMxMC43IDYuMiAxNy40IDE2LjUgMTkuNCAyNy44bDEuMiA2LjYgNi44IDAgNjAuNC0uMiA0LjYgMCAyLjMtNCAzMi44LTU2LjIgMy43LTYuMy02LTQuMmMtMTAuMy03LjItMTctMTkuMi0xNy0zMi44em00NS43IDEzMC4zbC01LjctNS43LTUuNyA1LjctNjQgNjQtNS43IDUuNyA1LjcgNS43IDY0IDY0IDUuNyA1LjcgNS43LTUuNyA2NC02NCA1LjctNS43LTUuNy01LjctNjQtNjR6TTIyNCAzMDguN0wxNzEuMyAyNTYgMjI0IDIwMy4zIDI3Ni43IDI1NiAyMjQgMzA4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const BadgeSheriff: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c-30.9 0-56 25.1-56 56c0 16.3 7 31 18.1 41.2l-27 46.3-49.5 .2c-4-13.1-12.8-24.8-25.6-32.2C57.2 96 23 105.2 7.5 132S1.2 193 28 208.5c13.3 7.7 28.4 9.3 42.2 5.7L94.1 256 70.2 297.8c-13.8-3.6-28.9-2-42.2 5.7C1.2 319-8 353.2 7.5 380S57.2 416 84 400.5c12.8-7.4 21.6-19.1 25.6-32.2l49.5 .2 27 46.3C175 425 168 439.7 168 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-16.3-7-31-18.1-41.2l27-46.3 49.5-.2c4 13.1 12.8 24.8 25.6 32.2c26.8 15.5 61 6.3 76.5-20.5s6.3-61-20.5-76.5c-13.3-7.7-28.5-9.3-42.2-5.7L353.9 256l23.9-41.8c13.8 3.6 28.9 2 42.2-5.7c26.8-15.5 36-49.7 20.5-76.5S390.8 96 364 111.5c-12.8 7.4-21.6 19.1-25.6 32.2l-49.5-.2-27-46.3C273 87 280 72.3 280 56c0-30.9-25.1-56-56-56zM184 56c0-22.1 17.9-40 40-40s40 17.9 40 40c0 13.5-6.7 25.5-17 32.8L241 93l3.7 6.3 32.8 56.2 2.3 4 4.6 0 60.4 .2 6.8 0 1.2-6.6c2-11.3 8.7-21.6 19.4-27.8c19.1-11 43.6-4.5 54.6 14.6s4.5 43.6-14.6 54.6c-11.1 6.4-23.9 6.9-34.9 2.5l-6.5-2.6-3.5 6L337.7 252l-2.3 4 2.3 4 29.4 51.5 3.5 6 6.5-2.6c11-4.4 23.9-3.9 34.9 2.5c19.1 11 25.7 35.5 14.6 54.6s-35.5 25.7-54.6 14.6c-10.7-6.2-17.4-16.5-19.4-27.8l-1.2-6.6-6.8 0-60.4 .2-4.6 0-2.3 4-32.8 56.2L241 419l6 4.2c10.3 7.3 17 19.2 17 32.8c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-13.5 6.7-25.5 17-32.8l6-4.2-3.7-6.3-32.8-56.2-2.3-4-4.6 0-60.4-.2-6.8 0-1.2 6.6c-2 11.3-8.7 21.6-19.4 27.8c-19.1 11-43.6 4.5-54.6-14.6s-4.5-43.6 14.6-54.6c11.1-6.4 23.9-6.9 34.9-2.5l6.5 2.6 3.5-6L110.3 260l2.3-4-2.3-4L80.9 200.6l-3.5-6-6.5 2.6c-11 4.4-23.9 3.9-34.9-2.5c-19.1-11-25.7-35.5-14.6-54.6s35.5-25.7 54.6-14.6c10.7 6.2 17.4 16.5 19.4 27.8l1.2 6.6 6.8 0 60.4-.2 4.6 0 2.3-4 32.8-56.2 3.7-6.3-6-4.2c-10.3-7.2-17-19.2-17-32.8zm45.7 130.3l-5.7-5.7-5.7 5.7-64 64-5.7 5.7 5.7 5.7 64 64 5.7 5.7 5.7-5.7 64-64 5.7-5.7-5.7-5.7-64-64zM224 308.7L171.3 256 224 203.3 276.7 256 224 308.7z" />
    </Icon>
);

export default BadgeSheriff;