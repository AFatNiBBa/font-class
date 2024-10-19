
import { Icon } from "../../index";

/**
 * A component that renders the `fire` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire?s=sharp-thin fire}
 * @preview ![fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjUyLjIgOTkuNGMtMTEuNC0xNC4yLTMyLjgtMzUuOS01Mi01NC42Yy05LjMtOS0xNy45LTE3LjItMjQuMy0yMy4yYy00LjMgNC05LjggOS4yLTE2LjEgMTUuNWMtMTYuMiAxNi0zNy44IDM4LjctNTkuMyA2NS40Yy0yMS42IDI2LjctNDIuOCA1Ny4yLTU4LjcgODguN0MyNS45IDIyMyAxNiAyNTQuOCAxNiAyODQuNUMxNiA0MDMuNSAxMDcuNSA0OTYgMjI0IDQ5NmMxMTUuMiAwIDIwOC05Mi41IDIwOC0yMTEuNWMwLTUyLjctMzEuMi0xMDguNi02NC44LTE1M2MtMTYuNS0yMS44LTMzLjEtNDAuMS00NS41LTUzYy00LTQuMi03LjYtNy43LTEwLjYtMTAuN2MtMi41IDIuMS01LjQgNC41LTguMyA3Yy0xMC43IDkuMS0yMS4yIDE4LjgtMjUuNSAyNC40bC0xMi40IDE2LjItMTIuOC0xNnpNMCAyODQuNUMwIDE1MiAxNzYgMCAxNzYgMHM0OS42IDQ1LjUgNzguMSA3Ny4xYzQgNC40IDcuNiA4LjYgMTAuNiAxMi4zYzIuNi0zLjMgNi41LTcuNSAxMS0xMS44QzI5MC42IDYzLjMgMzEyIDQ2LjYgMzEyIDQ2LjZzMTM2IDEyMS40IDEzNiAyMzcuOUM0NDggNDEyLjIgMzQ4LjIgNTEyIDIyNCA1MTJDOTguNCA1MTIgMCA0MTIuMSAwIDI4NC41ek0zMDMuNCA0MDguM0MyNzkuOCA0MjQgMjU0LjMgNDMyIDIyNS43IDQzMmMtMzUgMC02Ny40LTExLjMtOTEuMy0zMy4xQzExMC4zIDM3NyA5NiAzNDUuMyA5NiAzMDYuOGMwLTIwLjUgNi41LTM5LjEgMTgtNTguNmMxMS4yLTE5LjIgMjcuOC00MC41IDQ4LjgtNjYuMmwxMi41LTE1LjRMMTg3LjcgMTgyYzIuOSAzLjYgMjQuNyAzMS4zIDQ1LjcgNThMMjYyIDI3Ni40bC44IDEgMzcuOS00NCAxMy0xNS4xIDEyIDE1LjljNS4xIDYuOCA4LjQgMTMuNSAxMS4yIDE4LjlsLjEgLjFjMjguNiA1Mi42IDE2LjMgMTIwLjQtMzMuMSAxNTQuOWwtLjMgLjJzMCAwIDAgMHpNMjYyLjMgMzAyLjZsLTEwLjEtMTIuOGMtMTYuNy0yMS4yLTQ5LjktNjMuNC02Ni44LTg0LjljLTUuNC02LjgtOS4xLTExLjUtMTAuMi0xMi45Yy0zLjYgNC40LTcgOC43LTEwLjMgMTIuOGMtMzUuMyA0NC4xLTUyLjkgNzEuMy01Mi45IDEwMkMxMTIgMzc1LjQgMTYyLjYgNDE2IDIyNS43IDQxNmMyNS4zIDAgNDcuNy03IDY4LjgtMjFjNDIuMS0yOS40IDUzLjQtODguMiAyOC4xLTEzNC40bC0xLjItMi4zYy0yLjQtNC44LTUtOS42LTguNy0xNC41TDMwMiAyNTYuM2wtMjkuMiAzMy45LTEwLjYgMTIuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Fire: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M252.2 99.4c-11.4-14.2-32.8-35.9-52-54.6c-9.3-9-17.9-17.2-24.3-23.2c-4.3 4-9.8 9.2-16.1 15.5c-16.2 16-37.8 38.7-59.3 65.4c-21.6 26.7-42.8 57.2-58.7 88.7C25.9 223 16 254.8 16 284.5C16 403.5 107.5 496 224 496c115.2 0 208-92.5 208-211.5c0-52.7-31.2-108.6-64.8-153c-16.5-21.8-33.1-40.1-45.5-53c-4-4.2-7.6-7.7-10.6-10.7c-2.5 2.1-5.4 4.5-8.3 7c-10.7 9.1-21.2 18.8-25.5 24.4l-12.4 16.2-12.8-16zM0 284.5C0 152 176 0 176 0s49.6 45.5 78.1 77.1c4 4.4 7.6 8.6 10.6 12.3c2.6-3.3 6.5-7.5 11-11.8C290.6 63.3 312 46.6 312 46.6s136 121.4 136 237.9C448 412.2 348.2 512 224 512C98.4 512 0 412.1 0 284.5zM303.4 408.3C279.8 424 254.3 432 225.7 432c-35 0-67.4-11.3-91.3-33.1C110.3 377 96 345.3 96 306.8c0-20.5 6.5-39.1 18-58.6c11.2-19.2 27.8-40.5 48.8-66.2l12.5-15.4L187.7 182c2.9 3.6 24.7 31.3 45.7 58L262 276.4l.8 1 37.9-44 13-15.1 12 15.9c5.1 6.8 8.4 13.5 11.2 18.9l.1 .1c28.6 52.6 16.3 120.4-33.1 154.9l-.3 .2s0 0 0 0zM262.3 302.6l-10.1-12.8c-16.7-21.2-49.9-63.4-66.8-84.9c-5.4-6.8-9.1-11.5-10.2-12.9c-3.6 4.4-7 8.7-10.3 12.8c-35.3 44.1-52.9 71.3-52.9 102C112 375.4 162.6 416 225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4l-1.2-2.3c-2.4-4.8-5-9.6-8.7-14.5L302 256.3l-29.2 33.9-10.6 12.4z" />
    </Icon>
);

export default Fire;