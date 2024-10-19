
import { Icon } from "../../index";

/**
 * A component that renders the `horse-head` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horse-head?s=regular horse-head}
 * @preview ![horse-head](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDA1LjEgNDguN2M5LjItMy4zIDE4LjkgMy42IDE4LjkgMTMuNGMwIDQuMi0xLjkgOC4yLTUuMSAxMC45bC0zNC4zIDI4LjVjLTcuMyA2LjEtMTAuNCAxNi03LjcgMjUuMnMxMC42IDE1LjkgMjAuMSAxNy4xbDEuNSAuMmMzMS4zIDMuOSA1OC43IDIzIDczLjMgNTFMNTIwIDI4Ny44YzExIDIxLjMgNyA0Ny4yLTkuOSA2NC4yYy0xMC4zIDEwLjMtMjQuMyAxNi4xLTM4LjggMTYuMWwtNy40IDBjLTE4LjUgMC0zNi04LTQ4LjItMjEuOWwtMjYuMi0zMGMtMTAuMy0xMS44LTI4LTEzLjUtNDAuNC0zLjljLTI3LjYgMjEuNS02Ny4zIDE3LjItODkuNy05LjdsLTI1LTMwYy04LjUtMTAuMi0yMy42LTExLjYtMzMuOC0zLjFzLTExLjYgMjMuNi0zLjEgMzMuOGwyNSAzMGMyNSAzMCA2Mi4zIDQzLjggOTguNiA0MGw0My40IDY4LjJjMi4zIDMuNSAzLjUgNy43IDMuNSAxMS45YzAgNS44LTQuNyAxMC42LTEwLjYgMTAuNkwxMzYgNDY0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTEyMy4zYzAtOTguMiA2MS44LTE4NS43IDE1NC4zLTIxOC42TDQwNS4xIDQ4Ljd6bTAgMzY3bC0yMS41LTMzLjhjMjEgMjEuNyA1MCAzNC4xIDgwLjQgMzQuMWw3LjQgMGMyNy4zIDAgNTMuNS0xMC44IDcyLjgtMzAuMWMzMS43LTMxLjcgMzkuMi04MC40IDE4LjUtMTIwLjJsLTQ4LjMtOTIuOGMtMTQuNC0yNy44LTM3LjMtNDkuNi02NC43LTYzQzQ2My44IDk4IDQ3MiA4MC41IDQ3MiA2Mi4xYzAtNDMtNDIuNS03My04My01OC42TDI1MC4yIDUyLjlDMTM4LjYgOTIuNSA2NCAxOTguMiA2NCAzMTYuN0w2NCA0NDBjMCAzOS44IDMyLjIgNzIgNzIgNzJsMjIxLjQgMGMzMi40IDAgNTguNi0yNi4yIDU4LjYtNTguNmMwLTEzLjMtMy44LTI2LjQtMTEtMzcuNnpNMzYwIDIyNGEyNCAyNCAwIDEgMCAwLTQ4IDI0IDI0IDAgMSAwIDAgNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const HorseHead: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M405.1 48.7c9.2-3.3 18.9 3.6 18.9 13.4c0 4.2-1.9 8.2-5.1 10.9l-34.3 28.5c-7.3 6.1-10.4 16-7.7 25.2s10.6 15.9 20.1 17.1l1.5 .2c31.3 3.9 58.7 23 73.3 51L520 287.8c11 21.3 7 47.2-9.9 64.2c-10.3 10.3-24.3 16.1-38.8 16.1l-7.4 0c-18.5 0-36-8-48.2-21.9l-26.2-30c-10.3-11.8-28-13.5-40.4-3.9c-27.6 21.5-67.3 17.2-89.7-9.7l-25-30c-8.5-10.2-23.6-11.6-33.8-3.1s-11.6 23.6-3.1 33.8l25 30c25 30 62.3 43.8 98.6 40l43.4 68.2c2.3 3.5 3.5 7.7 3.5 11.9c0 5.8-4.7 10.6-10.6 10.6L136 464c-13.3 0-24-10.7-24-24l0-123.3c0-98.2 61.8-185.7 154.3-218.6L405.1 48.7zm0 367l-21.5-33.8c21 21.7 50 34.1 80.4 34.1l7.4 0c27.3 0 53.5-10.8 72.8-30.1c31.7-31.7 39.2-80.4 18.5-120.2l-48.3-92.8c-14.4-27.8-37.3-49.6-64.7-63C463.8 98 472 80.5 472 62.1c0-43-42.5-73-83-58.6L250.2 52.9C138.6 92.5 64 198.2 64 316.7L64 440c0 39.8 32.2 72 72 72l221.4 0c32.4 0 58.6-26.2 58.6-58.6c0-13.3-3.8-26.4-11-37.6zM360 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default HorseHead;