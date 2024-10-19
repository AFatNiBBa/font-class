
import { Icon } from "../../index";

/**
 * A component that renders the `viruses` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/viruses?s=sharp-light viruses}
 * @preview ![viruses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzQ0LjcgNzMuMkwzMTguMiA5OS43QzI5MyAxMjQuOSAzMTAgMTY4IDM0NS42IDE2OGwzOC40IDAgMCA0OC0zOC40IDBjLTM1LjYgMC01Mi42IDQzLjEtMjcuNCA2OC4zbDI2LjUgMjYuNS0zMy45IDMzLjktMjYuNS0yNi41QzI1OS4xIDI5MyAyMTYgMzEwIDIxNiAzNDUuNmwwIDM4LjQtNDggMCAwLTM4LjRjMC0zNS42LTQzLjEtNTIuNi02OC4zLTI3LjRMNzMuMiAzNDQuNyAzOS4zIDMxMC44bDI2LjUtMjYuNUM5MSAyNTkuMSA3NCAyMTYgMzguNCAyMTZMMCAyMTZsMC00OCAzOC40IDBDNzQgMTY4IDk2IDEyOCA2NS44IDk5LjdMMzkuMyA3My4yIDczLjIgMzkuMyA5OS43IDY1LjhDMTI0LjkgOTEgMTY4IDc0IDE2OCAzOC40TDE2OCAwbDQ4IDAgMCAzOC40QzIxNiA3NCAyNTkuMSA5MSAyODQuMyA2NS44bDI2LjUtMjYuNSAzMy45IDMzLjl6bS02Ny4xIDMzLjFjLTE0LjUgNC42LTI5LjkgNC40LTQzLjkgMEMyMTYuMiAxMDAuOSAyMDAuOSA4OSAxOTIgNzIuMWMtMTUuNyAzMC01MS44IDQ0LjEtODMuOSAzNC44YzYgMTYuOCA1LjIgMzQuNy0yLjIgNTAuOWMtNi44IDE1LTE4LjcgMjctMzMuNiAzNC40YzMwLjMgMTYgNDQuMyA1MyAzNCA4NS41YzMyLjYtMTAuNCA2OS43IDMuOCA4NS43IDM0LjNjMTYtMzAuNSA1My4xLTQ0LjYgODUuNy0zNC4zYy0xMC40LTMyLjYgMy44LTY5LjcgMzQuMy04NS43Yy0zMC41LTE2LTQ0LjYtNTMuMS0zNC4zLTg1Ljd6TTE2OCAxNDRhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4em00MCA4MGExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwek00NjQgMzUyYTE2IDE2IDAgMSAxIDMyIDAgMTYgMTYgMCAxIDEgLTMyIDB6bTEyMi41LTk3LjFsMjIuNiAyMi42LTExLjMgMTEuM0M1NzQuNSAzMTIuMSA1OTEgMzUyIDYyNCAzNTJsMTYgMCAwIDMyLTE2IDBjLTMzIDAtNDkuNSAzOS45LTI2LjIgNjMuMmwxMS4zIDExLjMtMjIuNiAyMi42LTExLjMtMTEuM0M1NTEuOSA0NDYuNSA1MTIgNDYzIDUxMiA0OTZsMCAxNi0zMiAwIDAtMTZjMC0zMy0zOS45LTQ5LjUtNjMuMi0yNi4ybC0xMS4zIDExLjMtMjIuNi0yMi42IDExLjMtMTEuM0M0MTcuNSA0MjMuOSA0MDEgMzg0IDM2OCAzODRsLTE2IDAgMC0zMiAxNiAwYzMzIDAgNDkuNS0zOS45IDI2LjItNjMuMmwtMTEuMy0xMS4zIDIyLjYtMjIuNiAxMS4zIDExLjNDNDQwLjEgMjg5LjUgNDgwIDI3MyA0ODAgMjQwbDAtMTYgMzIgMCAwIDE2YzAgMzMgMzkuOSA0OS41IDYzLjIgMjYuMmwxMS4zLTExLjN6bS0zMS40IDU0LjFjLTkuMiAuOC0xOC40LS40LTI3LjEtMy4yYy0xMi4zLTQtMjMuNS0xMS4zLTMyLTIxLjNjLTE0LjUgMTctMzYuOCAyNi4zLTU5LjEgMjQuNWMxLjggMjIuMy03LjQgNDQuNi0yNC41IDU5LjFjMTcgMTQuNSAyNi4zIDM2LjggMjQuNSA1OS4xYzIyLjMtMS44IDQ0LjYgNy40IDU5LjEgMjQuNWMxNC41LTE3IDM2LjgtMjYuMyA1OS4xLTI0LjVjLTEuOC0yMi4zIDcuNC00NC42IDI0LjUtNTkuMWMtMTctMTQuNS0yNi4zLTM2LjgtMjQuNS01OS4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Viruses: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344.7 73.2L318.2 99.7C293 124.9 310 168 345.6 168l38.4 0 0 48-38.4 0c-35.6 0-52.6 43.1-27.4 68.3l26.5 26.5-33.9 33.9-26.5-26.5C259.1 293 216 310 216 345.6l0 38.4-48 0 0-38.4c0-35.6-43.1-52.6-68.3-27.4L73.2 344.7 39.3 310.8l26.5-26.5C91 259.1 74 216 38.4 216L0 216l0-48 38.4 0C74 168 96 128 65.8 99.7L39.3 73.2 73.2 39.3 99.7 65.8C124.9 91 168 74 168 38.4L168 0l48 0 0 38.4C216 74 259.1 91 284.3 65.8l26.5-26.5 33.9 33.9zm-67.1 33.1c-14.5 4.6-29.9 4.4-43.9 0C216.2 100.9 200.9 89 192 72.1c-15.7 30-51.8 44.1-83.9 34.8c6 16.8 5.2 34.7-2.2 50.9c-6.8 15-18.7 27-33.6 34.4c30.3 16 44.3 53 34 85.5c32.6-10.4 69.7 3.8 85.7 34.3c16-30.5 53.1-44.6 85.7-34.3c-10.4-32.6 3.8-69.7 34.3-85.7c-30.5-16-44.6-53.1-34.3-85.7zM168 144a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM464 352a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm122.5-97.1l22.6 22.6-11.3 11.3C574.5 312.1 591 352 624 352l16 0 0 32-16 0c-33 0-49.5 39.9-26.2 63.2l11.3 11.3-22.6 22.6-11.3-11.3C551.9 446.5 512 463 512 496l0 16-32 0 0-16c0-33-39.9-49.5-63.2-26.2l-11.3 11.3-22.6-22.6 11.3-11.3C417.5 423.9 401 384 368 384l-16 0 0-32 16 0c33 0 49.5-39.9 26.2-63.2l-11.3-11.3 22.6-22.6 11.3 11.3C440.1 289.5 480 273 480 240l0-16 32 0 0 16c0 33 39.9 49.5 63.2 26.2l11.3-11.3zm-31.4 54.1c-9.2 .8-18.4-.4-27.1-3.2c-12.3-4-23.5-11.3-32-21.3c-14.5 17-36.8 26.3-59.1 24.5c1.8 22.3-7.4 44.6-24.5 59.1c17 14.5 26.3 36.8 24.5 59.1c22.3-1.8 44.6 7.4 59.1 24.5c14.5-17 36.8-26.3 59.1-24.5c-1.8-22.3 7.4-44.6 24.5-59.1c-17-14.5-26.3-36.8-24.5-59.1z" />
    </Icon>
);

export default Viruses;