
import { Icon } from "../../index";

/**
 * A component that renders the `car-wash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wash?s=sharp-thin car-wash}
 * @preview ![car-wash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODcuMSAxMDQuMkM5MiA5OS43IDk2IDkyLjIgOTYgODBjMC00LjQtMS44LTEwLjgtNS44LTE4LjhjLTMuOS03LjgtOS4zLTE2LTE1LTIzLjZjLTMuOS01LjItNy44LTkuOS0xMS4yLTEzLjljLTMuNCA0LTcuMyA4LjctMTEuMiAxMy45Yy01LjcgNy42LTExLjEgMTUuNy0xNSAyMy42QzMzLjggNjkuMiAzMiA3NS42IDMyIDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyYzEwLjEgMCAxOC0zIDIzLjEtNy44em0tMzQtOTIuNEM1OS40IDQuNiA2NCAwIDY0IDBzNC42IDQuNiAxMC45IDExLjhDODkgMjggMTEyIDU3LjkgMTEyIDgwYzAgMzItMjEuNSA0OC00OCA0OHMtNDgtMjEuNS00OC00OGMwLTIyLjEgMjMtNTIgMzcuMS02OC4yek0yNTYgODBjMC00LjQtMS44LTEwLjgtNS44LTE4LjhjLTMuOS03LjgtOS4zLTE2LTE1LTIzLjZjLTMuOS01LjItNy44LTkuOS0xMS4yLTEzLjljLTMuNCA0LTcuMyA4LjctMTEuMiAxMy45Yy01LjcgNy42LTExLjEgMTUuNy0xNSAyMy42Yy00IDguMS01LjggMTQuNS01LjggMTguOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmMxMC4xIDAgMTgtMyAyMy4xLTcuOGM0LjktNC41IDguOS0xMiA4LjktMjQuMnptLTgwIDBjMC0yMi4xIDIzLTUyIDM3LjEtNjguMkMyMTkuNCA0LjYgMjI0IDAgMjI0IDBzNC42IDQuNiAxMC45IDExLjhDMjQ5IDI4IDI3MiA1Ny45IDI3MiA4MGMwIDMyLTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDh6bS02MiA5Nmw2IDAgMjA4IDAgNiAwIDEuNyA1LjhMMzY2IDI4OGwzNCAwIDE2IDAgMCAxNiAwIDEyOCAwIDE2IDAgNDggMCAxNi0xNiAwLTQ4IDAtMTYgMCAwLTE2IDAtNDgtMjI0IDAgMCA0OCAwIDE2LTE2IDAtNDggMC0xNiAwIDAtMTYgMC00OCAwLTE2IDAtMTI4IDAtMTYgMTYgMCAzNCAwIDMwLjMtMTA2LjJMMTE0IDE3NnpNNDAwIDQzMmwwLTEyOEw0OCAzMDRsMCAxMjggNDggMCAxNiAwIDIyNCAwIDE2IDAgNDggMHptLTQ4IDY0bDQ4IDAgMC00OC00OCAwIDAgNDh6TTk2IDQ0OGwtNDggMCAwIDQ4IDQ4IDAgMC00OHpNMzIyIDE5MkwxMjYgMTkyIDk4LjYgMjg4bDI1MC44IDBMMzIyIDE5MnpNOTYgMzY4YTE2IDE2IDAgMSAwIDMyIDAgMTYgMTYgMCAxIDAgLTMyIDB6bTE2IDMyYTMyIDMyIDAgMSAxIDAtNjQgMzIgMzIgMCAxIDEgMCA2NHptMjI0LTQ4YTE2IDE2IDAgMSAwIDAgMzIgMTYgMTYgMCAxIDAgMC0zMnptMzIgMTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHpNNDE2IDgwYzAtNC40LTEuOC0xMC44LTUuOC0xOC44Yy0zLjktNy44LTkuMy0xNi0xNS0yMy42Yy0zLjktNS4yLTcuOC05LjktMTEuMi0xMy45Yy0zLjQgNC03LjMgOC43LTExLjIgMTMuOWMtNS43IDcuNi0xMS4xIDE1LjctMTUgMjMuNmMtNCA4LjEtNS44IDE0LjUtNS44IDE4LjhjMCAxNy43IDE0LjMgMzIgMzIgMzJjMTAuMSAwIDE4LTMgMjMuMS03LjhjNC45LTQuNSA4LjktMTIgOC45LTI0LjJ6bS04MCAwYzAtMjIuMSAyMy01MiAzNy4xLTY4LjJDMzc5LjQgNC42IDM4NCAwIDM4NCAwczQuNiA0LjYgMTAuOSAxMS44QzQwOSAyOCA0MzIgNTcuOSA0MzIgODBjMCAzMi0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CarWash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M87.1 104.2C92 99.7 96 92.2 96 80c0-4.4-1.8-10.8-5.8-18.8c-3.9-7.8-9.3-16-15-23.6c-3.9-5.2-7.8-9.9-11.2-13.9c-3.4 4-7.3 8.7-11.2 13.9c-5.7 7.6-11.1 15.7-15 23.6C33.8 69.2 32 75.6 32 80c0 17.7 14.3 32 32 32c10.1 0 18-3 23.1-7.8zm-34-92.4C59.4 4.6 64 0 64 0s4.6 4.6 10.9 11.8C89 28 112 57.9 112 80c0 32-21.5 48-48 48s-48-21.5-48-48c0-22.1 23-52 37.1-68.2zM256 80c0-4.4-1.8-10.8-5.8-18.8c-3.9-7.8-9.3-16-15-23.6c-3.9-5.2-7.8-9.9-11.2-13.9c-3.4 4-7.3 8.7-11.2 13.9c-5.7 7.6-11.1 15.7-15 23.6c-4 8.1-5.8 14.5-5.8 18.8c0 17.7 14.3 32 32 32c10.1 0 18-3 23.1-7.8c4.9-4.5 8.9-12 8.9-24.2zm-80 0c0-22.1 23-52 37.1-68.2C219.4 4.6 224 0 224 0s4.6 4.6 10.9 11.8C249 28 272 57.9 272 80c0 32-21.5 48-48 48s-48-21.5-48-48zm-62 96l6 0 208 0 6 0 1.7 5.8L366 288l34 0 16 0 0 16 0 128 0 16 0 48 0 16-16 0-48 0-16 0 0-16 0-48-224 0 0 48 0 16-16 0-48 0-16 0 0-16 0-48 0-16 0-128 0-16 16 0 34 0 30.3-106.2L114 176zM400 432l0-128L48 304l0 128 48 0 16 0 224 0 16 0 48 0zm-48 64l48 0 0-48-48 0 0 48zM96 448l-48 0 0 48 48 0 0-48zM322 192L126 192 98.6 288l250.8 0L322 192zM96 368a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm224-48a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM416 80c0-4.4-1.8-10.8-5.8-18.8c-3.9-7.8-9.3-16-15-23.6c-3.9-5.2-7.8-9.9-11.2-13.9c-3.4 4-7.3 8.7-11.2 13.9c-5.7 7.6-11.1 15.7-15 23.6c-4 8.1-5.8 14.5-5.8 18.8c0 17.7 14.3 32 32 32c10.1 0 18-3 23.1-7.8c4.9-4.5 8.9-12 8.9-24.2zm-80 0c0-22.1 23-52 37.1-68.2C379.4 4.6 384 0 384 0s4.6 4.6 10.9 11.8C409 28 432 57.9 432 80c0 32-21.5 48-48 48s-48-21.5-48-48z" />
    </Icon>
);

export default CarWash;