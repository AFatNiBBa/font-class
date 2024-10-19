
import { Icon } from "../../index";

/**
 * A component that renders the `fingerprint` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fingerprint?s=thin fingerprint}
 * @preview ![fingerprint](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjU2QzE2IDEyMy41IDEyMy41IDE2IDI1NiAxNmM3Ny45IDAgMTQ3LjIgMzcuMSAxOTEgOTQuN2MyLjcgMy41IDcuNyA0LjIgMTEuMiAxLjVzNC4yLTcuNyAxLjUtMTEuMkM0MTMgMzkuNiAzMzkuMSAwIDI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NmwwIDU2YzAgNC40IDMuNiA4IDggOHM4LTMuNiA4LThsMC01NnptNDg0LjgtNzVjLTEuMy00LjItNS44LTYuNi0xMC01LjNzLTYuNiA1LjgtNS4zIDEwYzYuOCAyMi4yIDEwLjUgNDUuOSAxMC41IDcwLjRsMCA1NmMwIDQuNCAzLjYgOCA4IDhzOC0zLjYgOC04bDAtNTZjMC0yNi4xLTMuOS01MS4zLTExLjItNzV6TTI1NiA4MGMtMjYuNSAwLTUxLjYgNS44LTc0LjEgMTYuM2MtNC43IDIuMi01LjggOC4yLTIuNCAxMi4xYzIuNCAyLjggNi41IDMuNiA5LjkgMi4xQzIwOS42IDEwMS4yIDIzMi4yIDk2IDI1NiA5NmM4OC40IDAgMTYwIDcxLjYgMTYwIDE2MGwwIDI0LjljMCAzMS41LTIuMiA2Mi44LTYuNiA5My44Yy0uNyA0LjkgMy4xIDkuMiA4IDkuMmMzLjkgMCA3LjMtMi45IDcuOS02LjhjNC41LTMxLjggNi44LTY0IDYuOC05Ni4zbDAtMjQuOWMwLTk3LjItNzguOC0xNzYtMTc2LTE3NnpNMTM5LjUgMTM1LjZjLTMtMy41LTguMy0zLjgtMTEuNS0uNGMtMjkuOCAzMS41LTQ4IDc0LTQ4IDEyMC44bDAgMjQuOWMwIDMxLjQtNC40IDYyLjYtMTMgOTIuNmMtMS41IDUuMiAyLjMgMTAuNCA3LjcgMTAuNGMzLjUgMCA2LjYtMi4zIDcuNS01LjZDOTEuNCAzNDYuNyA5NiAzMTMuOSA5NiAyODAuOUw5NiAyNTZjMC00Mi4zIDE2LjQtODAuNyA0My4xLTEwOS4zYzIuOS0zLjEgMy4xLTcuOSAuNC0xMS4xek0yNTYgMTYwYy01MyAwLTk2IDQzLTk2IDk2bDAgMjQuOWMwIDQyLjMtNi40IDg0LjMtMTkuMSAxMjQuNWMtMS42IDUuMiAyLjIgMTAuNiA3LjcgMTAuNmMzLjQgMCA2LjUtMi4yIDcuNS01LjVjMTMuMi00MS45IDE5LjktODUuNiAxOS45LTEyOS42bDAtMjQuOWMwLTQ0LjIgMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwbDAgMjQuOWMwIDQyLjItNC41IDg0LjItMTMuNCAxMjUuM2MtMS4xIDUgMi43IDkuOCA3LjggOS44YzMuNyAwIDctMi42IDcuNy02LjJjOS4yLTQyLjIgMTMuOC04NS40IDEzLjgtMTI4LjlsMC0yNC45YzAtNTMtNDMtOTYtOTYtOTZ6bTggOTZjMC00LjQtMy42LTgtOC04cy04IDMuNi04IDhsMCAyNC45YzAgNjEuOS0xMS40IDEyMy4yLTMzLjYgMTgwLjlsLTUuOSAxNS4zYy0xLjYgNC4xIC41IDguOCA0LjYgMTAuM3M4LjgtLjUgMTAuMy00LjZsNS45LTE1LjNDMjUyLjMgNDA4IDI2NCAzNDQuOCAyNjQgMjgwLjlsMC0yNC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Fingerprint: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c77.9 0 147.2 37.1 191 94.7c2.7 3.5 7.7 4.2 11.2 1.5s4.2-7.7 1.5-11.2C413 39.6 339.1 0 256 0C114.6 0 0 114.6 0 256l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56zm484.8-75c-1.3-4.2-5.8-6.6-10-5.3s-6.6 5.8-5.3 10c6.8 22.2 10.5 45.9 10.5 70.4l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56c0-26.1-3.9-51.3-11.2-75zM256 80c-26.5 0-51.6 5.8-74.1 16.3c-4.7 2.2-5.8 8.2-2.4 12.1c2.4 2.8 6.5 3.6 9.9 2.1C209.6 101.2 232.2 96 256 96c88.4 0 160 71.6 160 160l0 24.9c0 31.5-2.2 62.8-6.6 93.8c-.7 4.9 3.1 9.2 8 9.2c3.9 0 7.3-2.9 7.9-6.8c4.5-31.8 6.8-64 6.8-96.3l0-24.9c0-97.2-78.8-176-176-176zM139.5 135.6c-3-3.5-8.3-3.8-11.5-.4c-29.8 31.5-48 74-48 120.8l0 24.9c0 31.4-4.4 62.6-13 92.6c-1.5 5.2 2.3 10.4 7.7 10.4c3.5 0 6.6-2.3 7.5-5.6C91.4 346.7 96 313.9 96 280.9L96 256c0-42.3 16.4-80.7 43.1-109.3c2.9-3.1 3.1-7.9 .4-11.1zM256 160c-53 0-96 43-96 96l0 24.9c0 42.3-6.4 84.3-19.1 124.5c-1.6 5.2 2.2 10.6 7.7 10.6c3.4 0 6.5-2.2 7.5-5.5c13.2-41.9 19.9-85.6 19.9-129.6l0-24.9c0-44.2 35.8-80 80-80s80 35.8 80 80l0 24.9c0 42.2-4.5 84.2-13.4 125.3c-1.1 5 2.7 9.8 7.8 9.8c3.7 0 7-2.6 7.7-6.2c9.2-42.2 13.8-85.4 13.8-128.9l0-24.9c0-53-43-96-96-96zm8 96c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24.9c0 61.9-11.4 123.2-33.6 180.9l-5.9 15.3c-1.6 4.1 .5 8.8 4.6 10.3s8.8-.5 10.3-4.6l5.9-15.3C252.3 408 264 344.8 264 280.9l0-24.9z" />
    </Icon>
);

export default Fingerprint;