
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lock?s=duotone file-lock}
 * @preview ![file-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwyMjQgMGwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMCAwIDMzLjZjLTE5LjggMjAuMi0zMiA0Ny45LTMyIDc4LjRsMCAyNC42Yy0xOS4xIDExLjEtMzIgMzEuNy0zMiA1NS40bDAgMTI4YzAgMTEuNCAzIDIyLjIgOC4zIDMxLjVjLTIuNyAuMy01LjUgLjUtOC4zIC41TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxMjhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTI4IDB6bTgwIDgwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgNDgtNjQgMCAwLTQ4YzAtMTcuNyAxNC4zLTMyIDMyLTMyem0tODAgMzJsMCA0OGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCAxMjhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTYwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJsMC00OGMwLTQ0LjItMzUuOC04MC04MC04MHMtODAgMzUuOC04MCA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 33.6c-19.8 20.2-32 47.9-32 78.4l0 24.6c-19.1 11.1-32 31.7-32 55.4l0 128c0 11.4 3 22.2 8.3 31.5c-2.7 .3-5.5 .5-8.3 .5L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zm80 80c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default FileLock;