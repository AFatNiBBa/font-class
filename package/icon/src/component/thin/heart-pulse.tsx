
import { Icon } from "../../index";

/**
 * A component that renders the `heart-pulse` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=thin heart-pulse}
 * @preview ![heart-pulse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkzLjYgNTcuN0M0NTEuOSA2NS4zIDQ5NiAxMTUgNDk2IDE3My42YzAgMzAuMy0xMS43IDU5LjMtMzIuOCA4MS4xTDQ2MiAyNTZsLTkwLjIgMGMtOS4xIDAtMTcuNC01LjEtMjEuNS0xMy4zbC0yMy4yLTQ2LjNjLTEuNC0yLjctNC4xLTQuNC03LjItNC40cy01LjggMS43LTcuMiA0LjRMMjU2LjQgMzA5LjQgMTkxLjMgMTY0LjdjLTEuMy0yLjktNC4yLTQuOC03LjQtNC43cy02IDItNy4zIDQuOWwtMzEuOCA3Ni4zYy0zLjcgOC45LTEyLjUgMTQuOC0yMi4yIDE0LjhsLTcyLjYgMC0xLjMtMS4zQzI3LjggMjMyLjkgMTYgMjAzLjggMTYgMTczLjVDMTYgMTE0LjkgNjAuMSA2NS4zIDExOC4zIDU3LjdjNDIuOS01LjYgODUuOCAxMi42IDExMS4yIDQ3LjZsMjAgMjcuNWMxLjUgMi4xIDMuOSAzLjMgNi41IDMuM3M1LTEuMiA2LjUtMy4zbDIwLTI3LjVjMjUuNC0zNC45IDY4LjMtNTMuMiAxMTEuMi00Ny42ek00NjQgMjcybDQuOCAwIDYtNi4yQzQ5OC42IDI0MS4xIDUxMiAyMDggNTEyIDE3My42YzAtNjYuOC01MC4yLTEyMy4yLTExNi4zLTEzMS44Yy00OC42LTYuMy05Ny4zIDE0LjMtMTI2LjIgNTRMMjU2IDExNC40IDI0Mi41IDk1LjhjLTI4LjktMzkuNy03Ny42LTYwLjQtMTI2LjItNTRDNTAuMiA1MC40IDAgMTA2LjggMCAxNzMuNWMwIDM0LjUgMTMuNCA2Ny42IDM3LjQgOTIuM2w2IDYuMiAzLjYgMGMwIDAgMCAwIDAgMGw3NS43IDBjMTYuMSAwIDMwLjctOS43IDM2LjktMjQuNmwyNC43LTU5LjMgNjQuNCAxNDMuMmMxLjMgMi44IDQgNC43IDcuMSA0LjdzNS45LTEuNyA3LjMtNC40TDMyMCAyMTcuOWwxNiAzMmM2LjggMTMuNiAyMC42IDIyLjEgMzUuOCAyMi4xbDkyLjIgMHMwIDAgMCAwek03NC4zIDMwNEwyMzYuNSA0NzEuNmM1LjIgNS40IDEyLjQgOC40IDE5LjkgOC40YzcuNSAwIDE0LjctMyAxOS45LTguNUw0MzcuOSAzMDRsLTIyLjIgMC0xNTEgMTU2LjRjLTIuMiAyLjMtNS4yIDMuNi04LjQgMy42cy02LjItMS4zLTguNC0zLjZMOTYuNiAzMDRsLTIyLjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HeartPulse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M393.6 57.7C451.9 65.3 496 115 496 173.6c0 30.3-11.7 59.3-32.8 81.1L462 256l-90.2 0c-9.1 0-17.4-5.1-21.5-13.3l-23.2-46.3c-1.4-2.7-4.1-4.4-7.2-4.4s-5.8 1.7-7.2 4.4L256.4 309.4 191.3 164.7c-1.3-2.9-4.2-4.8-7.4-4.7s-6 2-7.3 4.9l-31.8 76.3c-3.7 8.9-12.5 14.8-22.2 14.8l-72.6 0-1.3-1.3C27.8 232.9 16 203.8 16 173.5C16 114.9 60.1 65.3 118.3 57.7c42.9-5.6 85.8 12.6 111.2 47.6l20 27.5c1.5 2.1 3.9 3.3 6.5 3.3s5-1.2 6.5-3.3l20-27.5c25.4-34.9 68.3-53.2 111.2-47.6zM464 272l4.8 0 6-6.2C498.6 241.1 512 208 512 173.6c0-66.8-50.2-123.2-116.3-131.8c-48.6-6.3-97.3 14.3-126.2 54L256 114.4 242.5 95.8c-28.9-39.7-77.6-60.4-126.2-54C50.2 50.4 0 106.8 0 173.5c0 34.5 13.4 67.6 37.4 92.3l6 6.2 3.6 0c0 0 0 0 0 0l75.7 0c16.1 0 30.7-9.7 36.9-24.6l24.7-59.3 64.4 143.2c1.3 2.8 4 4.7 7.1 4.7s5.9-1.7 7.3-4.4L320 217.9l16 32c6.8 13.6 20.6 22.1 35.8 22.1l92.2 0s0 0 0 0zM74.3 304L236.5 471.6c5.2 5.4 12.4 8.4 19.9 8.4c7.5 0 14.7-3 19.9-8.5L437.9 304l-22.2 0-151 156.4c-2.2 2.3-5.2 3.6-8.4 3.6s-6.2-1.3-8.4-3.6L96.6 304l-22.3 0z" />
    </Icon>
);

export default HeartPulse;