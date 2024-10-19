
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-tongue-squint` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue-squint?s=duotone face-grin-tongue-squint}
 * @preview ![face-grin-tongue-squint](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM2OC45IDczLjEgNDY0LjcgMTc0LjUgNDk4LjhDMTY1LjMgNDg0IDE2MCA0NjYuNiAxNjAgNDQ4bDAtNDcuM2MtMjQtMTcuNS00My4xLTQxLjQtNTQuOC02OS4yYy01LTExLjggNy0yMi41IDE5LjMtMTguN2MzOS43IDEyLjIgODQuNSAxOSAxMzEuOCAxOXM5Mi4xLTYuOCAxMzEuOC0xOWMxMi4zLTMuOCAyNC4zIDYuOSAxOS4zIDE4LjdjLTExLjggMjgtMzEuMSA1Mi01NS40IDY5LjZsMCA0Ni45YzAgMTguNi01LjMgMzYtMTQuNSA1MC44QzQzOC45IDQ2NC43IDUxMiAzNjguOSA1MTIgMjU2QzUxMiAxMTQuNiAzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZ6TTExNiAxNDEuMWMwLTYuOSA1LjctMTEuOSAxMS45LTExLjljMS45IDAgMy44IC40IDUuNiAxLjRjMzAgMTYgNTkuOSAzMiA4OS45IDQ3LjljMTAuNyA1LjcgMTAuNyAyMS4xIDAgMjYuOGMtMzAgMTYtNTkuOSAzMi04OS45IDQ3LjljLTcuOSA0LjItMTcuNS0xLjUtMTcuNS0xMC41YzAtMi44IDEtNS41IDIuOC03LjZjMTItMTQuNCAyNC0yOC44IDM2LTQzLjJjLTEyLTE0LjQtMjQtMjguOC0zNi00My4yYy0xLjgtMi4xLTIuOC00LjgtMi44LTcuNnptMTcyLjYgMzcuNGMzMC0xNiA1OS45LTMyIDg5LjktNDcuOWM3LjktNC4yIDE3LjUgMS41IDE3LjUgMTAuNWMwIDIuOC0xIDUuNS0yLjggNy42Yy0xMiAxNC40LTI0IDI4LjgtMzYgNDMuMmMxMiAxNC40IDI0IDI4LjggMzYgNDMuMmMxLjggMi4xIDIuOCA0LjggMi44IDcuNmMwIDktOS42IDE0LjctMTcuNSAxMC41Yy0zMC0xNi01OS45LTMyLTg5LjktNDcuOWMtMTAuNy01LjctMTAuNy0yMS4xIDAtMjYuOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEzMy41IDEzMC43Yy03LjktNC4yLTE3LjUgMS41LTE3LjUgMTAuNWMwIDIuOCAxIDUuNSAyLjggNy42bDM2IDQzLjItMzYgNDMuMmMtMS44IDIuMS0yLjggNC44LTIuOCA3LjZjMCA5IDkuNiAxNC43IDE3LjUgMTAuNWw4OS45LTQ3LjljMTAuNy01LjcgMTAuNy0yMS4xIDAtMjYuOGwtODkuOS00Ny45em0yNDUgMGwtODkuOSA0Ny45Yy0xMC43IDUuNy0xMC43IDIxLjEgMCAyNi44bDg5LjkgNDcuOWM3LjkgNC4yIDE3LjUtMS41IDE3LjUtMTAuNWMwLTIuOC0xLTUuNS0yLjgtNy42bC0zNi00My4yIDM2LTQzLjJjMS44LTIuMSAyLjgtNC44IDIuOC03LjZjMC05LTkuNi0xNC43LTE3LjUtMTAuNXpNMzIwIDQ0OGwwLTQ1LjRjMC0xNC43LTExLjktMjYuNi0yNi42LTI2LjZsLTIgMGMtMTEuMyAwLTIxLjEgNy45LTIzLjYgMTguOWMtMi44IDEyLjYtMjAuOCAxMi42LTIzLjYgMGMtMi41LTExLjEtMTIuMy0xOC45LTIzLjYtMTguOWwtMiAwYy0xNC43IDAtMjYuNiAxMS45LTI2LjYgMjYuNmwwIDQ1LjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRzNjQtMjguNyA2NC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceGrinTongueSquint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448l0-47.3c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6l0 46.9c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zM116 141.1c0-6.9 5.7-11.9 11.9-11.9c1.9 0 3.8 .4 5.6 1.4c30 16 59.9 32 89.9 47.9c10.7 5.7 10.7 21.1 0 26.8c-30 16-59.9 32-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6c12-14.4 24-28.8 36-43.2c-12-14.4-24-28.8-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm172.6 37.4c30-16 59.9-32 89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6c-12 14.4-24 28.8-36 43.2c12 14.4 24 28.8 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5c-30-16-59.9-32-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8z" />
            <path d="M133.5 130.7c-7.9-4.2-17.5 1.5-17.5 10.5c0 2.8 1 5.5 2.8 7.6l36 43.2-36 43.2c-1.8 2.1-2.8 4.8-2.8 7.6c0 9 9.6 14.7 17.5 10.5l89.9-47.9c10.7-5.7 10.7-21.1 0-26.8l-89.9-47.9zm245 0l-89.9 47.9c-10.7 5.7-10.7 21.1 0 26.8l89.9 47.9c7.9 4.2 17.5-1.5 17.5-10.5c0-2.8-1-5.5-2.8-7.6l-36-43.2 36-43.2c1.8-2.1 2.8-4.8 2.8-7.6c0-9-9.6-14.7-17.5-10.5zM320 448l0-45.4c0-14.7-11.9-26.6-26.6-26.6l-2 0c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9l-2 0c-14.7 0-26.6 11.9-26.6 26.6l0 45.4c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default FaceGrinTongueSquint;