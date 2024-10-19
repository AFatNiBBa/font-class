
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=duotone file-shield}
 * @preview ![file-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwyMjQgMGwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMCAwIDQ3LTkyLjggMzcuMWMtMjEuMyA4LjUtMzUuMiAyOS4xLTM1LjIgNTJjMCA1Ni42IDE4LjkgMTQ4IDk0LjIgMjA4LjNjLTkgNC44LTE5LjMgNy42LTMwLjIgNy42TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTEyOCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMkwyMjQgMCAzODQgMTYwem0zOS4xIDY1LjdjNS43LTIuMyAxMi4xLTIuMyAxNy44IDBsMTIwIDQ4QzU3MCAyNzcuNCA1NzYgMjg2LjIgNTc2IDI5NmMwIDYzLjMtMjUuOSAxNjguOC0xMzQuOCAyMTQuMmMtNS45IDIuNS0xMi42IDIuNS0xOC41IDBDMzEzLjkgNDY0LjggMjg4IDM1OS4zIDI4OCAyOTZjMC05LjggNi0xOC42IDE1LjEtMjIuM2wxMjAtNDh6TTUyNy40IDMxMkw0MzIgMjczLjhsMCAxODcuOGM2OC4yLTMzIDkxLjUtOTkgOTUuNC0xNDkuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 47-92.8 37.1c-21.3 8.5-35.2 29.1-35.2 52c0 56.6 18.9 148 94.2 208.3c-9 4.8-19.3 7.6-30.2 7.6L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zm39.1 65.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8l0 187.8c68.2-33 91.5-99 95.4-149.7z" />
    </Icon>
);

export default FileShield;