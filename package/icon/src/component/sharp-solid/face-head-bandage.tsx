
import { Icon } from "../../index";

/**
 * A component that renders the `face-head-bandage` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-head-bandage?s=sharp-solid face-head-bandage}
 * @preview ![face-head-bandage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDBDMjEzLjYgMCAxNDYuNiAzMS44IDk5LjggODIuNGMtMTIuNSAyLjUtMjUgNS4yLTM3LjMgOC4ybC0xMi40IDNjLTIuMyAzLjMtNC41IDYuNy02LjYgMTAuMWwtLjggMS4yQzI2LjkgMTMwLjYgMTUgMTU4LjkgNy44IDE4OWwtLjQgMS44Yy0zLjggMTYuNC02LjIgMzMuMy03IDUwLjZjMCAwIDAgMCAwIDBjLS4xIDEuMy0uMSAyLjYtLjIgMy44bDAgLjVjLS4xIDMuMS0uMiA2LjItLjIgOS4zbDAgLjkgMCAuNSAwIC43Yy4xIDMxIDUuMSA2MC45IDE0LjQgODguOWwuNyAyLjFjNi4zIDE4LjcgMTQuNSAzNi41IDI0LjIgNTMuMmwyMC4yLTI5LjlDMTAxLjcgNDU0LjkgMTg4LjIgNTEyIDI4OCA1MTJjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NmMwLTguMi0uNC0xNi40LTEuMS0yNC40bDMyLjggOS45Yy0uOS0xNy4yLTMuMi0zNC4xLTctNTAuNGwtLjUtMi4xYy01LjItMjEuNi0xMi44LTQyLjMtMjIuNS02MS44YzAgMCAwIDAgMCAwYy00LjEtOC4xLTguNS0xNi0xMy4zLTIzLjdjLTItMy4xLTQtNi4yLTYtOS4zYy00LjEtNi04LjQtMTEuOC0xMi45LTE3LjVsLS42LS43Yy0yMS4yLTI2LjUtNDctNDkuMS03Ni4yLTY2LjhsLTEuNS0uOWMtMi44LTEuNi01LjUtMy4yLTguNC00LjhMNDE2LjIgNC45Yy0xNi4yIDItMzIuMiA0LjYtNDguMSA3LjlDMzQyLjkgNC41IDMxNiAwIDI4OCAwem0xMi42IDY0LjFjMzguMy0xMyA3OC4zLTIyLjMgMTE5LjUtMjcuNGMxMy43IDguMyAyNi42IDE3LjkgMzguNSAyOC41YzYuMSA1LjUgMTEuOSAxMS4yIDE3LjUgMTcuMkM0MTkuMyA3MS4xIDM2MC42IDY0LjkgMzAwLjYgNjQuMXptMTUuNiA5Ni40czAgMCAwIDBjLTkuNC0uMy0xOC44LS41LTI4LjItLjVjLTE3LjEgMC0zNC4xIC41LTUxIDEuNWMwIDAgMCAwIDAgMGMtNDcuOCAyLjgtOTQuNiA5LjQtMTQwIDE5LjdjMCAwIDAgMCAwIDBjLTE5LjYgNC40LTM5IDkuNS01OC4xIDE1LjNsLjEtLjZjLjQtMS44IC45LTMuNiAxLjQtNS40YzIuOC0xMC41IDYuMi0yMC44IDEwLjItMzAuN2M1LjQtMTMuMyAxMS44LTI2IDE5LjMtMzhDMTM5LjkgMTA0LjkgMjEyLjkgOTYgMjg4IDk2czE0OC4xIDguOSAyMTggMjUuOGM3LjQgMTIgMTMuOSAyNC44IDE5LjMgMzhjNC44IDExLjggOC43IDI0LjEgMTEuNyAzNi43Yy0xMS45LTMuNi0yMy45LTYuOS0zNi0xMGMtNTkuNC0xNS4xLTEyMS4yLTI0LTE4NC44LTI2ek0xNzYuNCAyNDBjMTMuNS0xMC44IDI3LjYtMjAuOSA0Mi4xLTMwLjRjMTIuNyA0LjIgMjEuOSAxNi4yIDIxLjkgMzAuNGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMnptLTEyNi0xMy42YzQxLTEyLjIgODMuMy0yMS4zIDEyNi42LTI3LjFjLTQwLjYgMjkuNC03NyA2NC40LTEwOCAxMDMuN2MtOC41IDEwLjctMTYuNSAyMS43LTI0LjIgMzMuMWMtNC40LTEzLjMtNy43LTI3LjEtOS45LTQxLjNDMzMgMjgyLjEgMzIgMjY5LjIgMzIgMjU2YzAtMyAuMS02LjEgLjItOS4xYzUuOS03IDEyLTEzLjggMTguMi0yMC41ek0zNzMuMiAzOTcuNUMzNTYuNCAzODIuMiAzMzAuOCAzNjggMjk2IDM2OGMtMTMuMSAwLTI0LjggMi0zNS4yIDUuM2wtMTUuMyA0LjgtOS42LTMwLjUgMTUuMy00LjhjMTMuNC00LjIgMjguNC02LjggNDQuOC02LjhjNDQuMiAwIDc3LjIgMTguMyA5OC44IDM3LjlsMTEuOCAxMC44LTIxLjUgMjMuNy0xMS44LTEwLjh6TTM2OC40IDIwOGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceHeadBandage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0C213.6 0 146.6 31.8 99.8 82.4c-12.5 2.5-25 5.2-37.3 8.2l-12.4 3c-2.3 3.3-4.5 6.7-6.6 10.1l-.8 1.2C26.9 130.6 15 158.9 7.8 189l-.4 1.8c-3.8 16.4-6.2 33.3-7 50.6c0 0 0 0 0 0c-.1 1.3-.1 2.6-.2 3.8l0 .5c-.1 3.1-.2 6.2-.2 9.3l0 .9 0 .5 0 .7c.1 31 5.1 60.9 14.4 88.9l.7 2.1c6.3 18.7 14.5 36.5 24.2 53.2l20.2-29.9C101.7 454.9 188.2 512 288 512c141.4 0 256-114.6 256-256c0-8.2-.4-16.4-1.1-24.4l32.8 9.9c-.9-17.2-3.2-34.1-7-50.4l-.5-2.1c-5.2-21.6-12.8-42.3-22.5-61.8c0 0 0 0 0 0c-4.1-8.1-8.5-16-13.3-23.7c-2-3.1-4-6.2-6-9.3c-4.1-6-8.4-11.8-12.9-17.5l-.6-.7c-21.2-26.5-47-49.1-76.2-66.8l-1.5-.9c-2.8-1.6-5.5-3.2-8.4-4.8L416.2 4.9c-16.2 2-32.2 4.6-48.1 7.9C342.9 4.5 316 0 288 0zm12.6 64.1c38.3-13 78.3-22.3 119.5-27.4c13.7 8.3 26.6 17.9 38.5 28.5c6.1 5.5 11.9 11.2 17.5 17.2C419.3 71.1 360.6 64.9 300.6 64.1zm15.6 96.4s0 0 0 0c-9.4-.3-18.8-.5-28.2-.5c-17.1 0-34.1 .5-51 1.5c0 0 0 0 0 0c-47.8 2.8-94.6 9.4-140 19.7c0 0 0 0 0 0c-19.6 4.4-39 9.5-58.1 15.3l.1-.6c.4-1.8 .9-3.6 1.4-5.4c2.8-10.5 6.2-20.8 10.2-30.7c5.4-13.3 11.8-26 19.3-38C139.9 104.9 212.9 96 288 96s148.1 8.9 218 25.8c7.4 12 13.9 24.8 19.3 38c4.8 11.8 8.7 24.1 11.7 36.7c-11.9-3.6-23.9-6.9-36-10c-59.4-15.1-121.2-24-184.8-26zM176.4 240c13.5-10.8 27.6-20.9 42.1-30.4c12.7 4.2 21.9 16.2 21.9 30.4c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-126-13.6c41-12.2 83.3-21.3 126.6-27.1c-40.6 29.4-77 64.4-108 103.7c-8.5 10.7-16.5 21.7-24.2 33.1c-4.4-13.3-7.7-27.1-9.9-41.3C33 282.1 32 269.2 32 256c0-3 .1-6.1 .2-9.1c5.9-7 12-13.8 18.2-20.5zM373.2 397.5C356.4 382.2 330.8 368 296 368c-13.1 0-24.8 2-35.2 5.3l-15.3 4.8-9.6-30.5 15.3-4.8c13.4-4.2 28.4-6.8 44.8-6.8c44.2 0 77.2 18.3 98.8 37.9l11.8 10.8-21.5 23.7-11.8-10.8zM368.4 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceHeadBandage;