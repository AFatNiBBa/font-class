
import { Icon } from "../../index";

/**
 * A component that renders the `face-hand-peeking` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hand-peeking?s=solid face-hand-peeking}
 * @preview ![face-hand-peeking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk3LjggMTQ0LjNjMTIuOS0xMi45IDMxLjgtMTYuMSA0Ny43LTkuNkM1MDIuMiA1NC41IDQxNy41IDAgMzIwIDBDMjQ4LjUgMCAxODMuOCAyOS4zIDEzNy4zIDc2LjZjNy43IDEuOCAxNC45IDUuNyAyMC45IDExLjdjMTcuMiAxNy4yIDE3LjIgNDUgMCA2Mi4ybC0xLjUgMS41IDc1LjIgMGMyMi4xIDAgNDAgMTcuOSA0MCA0MGMwIDIuNi0uMiA1LjEtLjcgNy41YzEwLjEgNy4zIDE2LjcgMTkuMSAxNi43IDMyLjVzLTYuNiAyNS4zLTE2LjcgMzIuNWMuNSAyLjQgLjcgNC45IC43IDcuNWMwIDIyLjEtMTcuOSA0MC00MCA0MGwtOCAwYzAgLjMgMCAuNiAwIC45YzAgMjIuMS0xNy45IDQwLTQwIDQwbC02NC44IDBjLTEzLjMgMC0yNi40LTIuMi0zOC44LTYuNUMxMTcgNDQzLjIgMjEwLjQgNTEyIDMyMCA1MTJjOTEuNSAwIDE3MS44LTQ4IDIxNy4xLTEyMC4yYy01LjQgLjctMTAuOCAxLjEtMTYuMyAxLjFsLTY0LjggMGMtMjIuMSAwLTQwLTE3LjktNDAtNDBsMC0uMyAwLS42LTggMGMtMjIuMSAwLTQwLTE3LjktNDAtNDBjMC0xLjEgMC0yLjIgLjEtMy4zYy0zNy0xMC40LTY0LjEtNDQuNC02NC4xLTg0LjdjMC00OC42IDM5LjQtODggODgtODhjNi42IDAgMTMgLjcgMTkuMiAyLjFjMTEuOC00IDI1LjItMi40IDM2LjEgNS40bDM3LjkgMjcuMWMxLjEtOS42IDUuMy0xOC45IDEyLjYtMjYuMnpNMzIwIDQ0OGMtMzUuMyAwLTY0LTIxLjUtNjQtNDhzMjguNy00OCA2NC00OHM2NCAyMS41IDY0IDQ4cy0yOC43IDQ4LTY0IDQ4em05MC4zLTIwOGMzLjgtNC4yIDYuMS05LjkgNi4xLTE2YzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0YzAgNi4xIDIuMyAxMS44IDYuMSAxNmwzNS44IDB6TTI0OCAxOTJjMC04LjgtNy4yLTE2LTE2LTE2bC0xMTMuOCAwYy03LjEgMC0xMC43LTguNi01LjctMTMuN2wyOC44LTI4LjhjNy44LTcuOCA3LjgtMjAuNSAwLTI4LjNzLTIwLjUtNy44LTI4LjMgMEw1MS45IDE2Ni40bC0uOCAuOEMxNC43IDIwNC40IDE1IDI2NC4xIDUxLjkgMzAxYzE3LjkgMTcuOSA0Mi4xIDI3LjkgNjcuMyAyNy45bDY0LjggMGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmwtMTQgMGMtMi41IDAtNC41LTItNC41LTQuNXMyLTQuNSA0LjUtNC41bDYyIDBjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZsLTYyLjQgMGMtMi4yIDAtNC0xLjgtNC00czEuOC00IDQtNGw3OC40IDBjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZsLTc4LjQgMGMtMi4yIDAtNC0xLjgtNC00czEuOC00IDQtNGw2Mi40IDBjOC44IDAgMTYtNy4yIDE2LTE2em0xNjMtMjUuM2MtNS4xIDcuMi0zLjUgMTcuMiAzLjcgMjIuM2w1OS43IDQyLjZjMy41IDIuNSA1LjYgNi42IDUuNiAxMC45YzAgNy40LTYgMTMuNC0xMy40IDEzLjRMMzkyIDI1NmMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNmw4NCAwYzIuMiAwIDQgMS44IDQgNHMtMS44IDQtNCA0bC02OCAwYy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2bDY3LjUgMGMyLjUgMCA0LjUgMiA0LjUgNC41cy0yIDQuNS00LjUgNC41bC0xOS41IDBjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZsNjQuOCAwYzI1LjIgMCA0OS41LTEwIDY3LjMtMjcuOWMzNi45LTM2LjkgMzcuMi05Ni42IC44LTEzMy44bC0uOC0uOEw1NDMgMTYxLjNjLTcuOC03LjgtMjAuNS03LjgtMjguMyAwcy03LjggMjAuNSAwIDI4LjNsMTQuOCAxNC44YzYuNiA2LjYgMi43IDE4LTYuNiAxOWMtMi44IC4zLTUuNi0uNC03LjgtMkw0MzMuMyAxNjNjLTcuMi01LjEtMTcuMi0zLjUtMjIuMyAzLjd6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceHandPeeking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M497.8 144.3c12.9-12.9 31.8-16.1 47.7-9.6C502.2 54.5 417.5 0 320 0C248.5 0 183.8 29.3 137.3 76.6c7.7 1.8 14.9 5.7 20.9 11.7c17.2 17.2 17.2 45 0 62.2l-1.5 1.5 75.2 0c22.1 0 40 17.9 40 40c0 2.6-.2 5.1-.7 7.5c10.1 7.3 16.7 19.1 16.7 32.5s-6.6 25.3-16.7 32.5c.5 2.4 .7 4.9 .7 7.5c0 22.1-17.9 40-40 40l-8 0c0 .3 0 .6 0 .9c0 22.1-17.9 40-40 40l-64.8 0c-13.3 0-26.4-2.2-38.8-6.5C117 443.2 210.4 512 320 512c91.5 0 171.8-48 217.1-120.2c-5.4 .7-10.8 1.1-16.3 1.1l-64.8 0c-22.1 0-40-17.9-40-40l0-.3 0-.6-8 0c-22.1 0-40-17.9-40-40c0-1.1 0-2.2 .1-3.3c-37-10.4-64.1-44.4-64.1-84.7c0-48.6 39.4-88 88-88c6.6 0 13 .7 19.2 2.1c11.8-4 25.2-2.4 36.1 5.4l37.9 27.1c1.1-9.6 5.3-18.9 12.6-26.2zM320 448c-35.3 0-64-21.5-64-48s28.7-48 64-48s64 21.5 64 48s-28.7 48-64 48zm90.3-208c3.8-4.2 6.1-9.9 6.1-16c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 6.1 2.3 11.8 6.1 16l35.8 0zM248 192c0-8.8-7.2-16-16-16l-113.8 0c-7.1 0-10.7-8.6-5.7-13.7l28.8-28.8c7.8-7.8 7.8-20.5 0-28.3s-20.5-7.8-28.3 0L51.9 166.4l-.8 .8C14.7 204.4 15 264.1 51.9 301c17.9 17.9 42.1 27.9 67.3 27.9l64.8 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-14 0c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5l62 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-62.4 0c-2.2 0-4-1.8-4-4s1.8-4 4-4l78.4 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-78.4 0c-2.2 0-4-1.8-4-4s1.8-4 4-4l62.4 0c8.8 0 16-7.2 16-16zm163-25.3c-5.1 7.2-3.5 17.2 3.7 22.3l59.7 42.6c3.5 2.5 5.6 6.6 5.6 10.9c0 7.4-6 13.4-13.4 13.4L392 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l84 0c2.2 0 4 1.8 4 4s-1.8 4-4 4l-68 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l67.5 0c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5l-19.5 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64.8 0c25.2 0 49.5-10 67.3-27.9c36.9-36.9 37.2-96.6 .8-133.8l-.8-.8L543 161.3c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3l14.8 14.8c6.6 6.6 2.7 18-6.6 19c-2.8 .3-5.6-.4-7.8-2L433.3 163c-7.2-5.1-17.2-3.5-22.3 3.7z" />
    </Icon>
);

export default FaceHandPeeking;