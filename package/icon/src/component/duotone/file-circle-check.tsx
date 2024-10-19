
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-check?s=duotone file-circle-check}
 * @preview ![file-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwyMjQgMGwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMCAwIDM4LjZDMzEwLjEgMjE5LjUgMjU2IDI4Ny40IDI1NiAzNjhjMCA1OS4xIDI5LjEgMTExLjMgNzMuNyAxNDMuM2MtMy4yIC41LTYuNCAuNy05LjcgLjdMNjQgNTEyYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MGwtMTI4IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyTDIyNCAwIDM4NCAxNjB6TTI4OCAzNjhhMTQ0IDE0NCAwIDEgMSAyODggMCAxNDQgMTQ0IDAgMSAxIC0yODggMHptMjExLjMtNDMuM2MtNi4yLTYuMi0xNi40LTYuMi0yMi42IDBMNDE2IDM4NS40bC0yOC43LTI4LjdjLTYuMi02LjItMTYuNC02LjItMjIuNiAwcy02LjIgMTYuNCAwIDIyLjZsNDAgNDBjNi4yIDYuMiAxNi40IDYuMiAyMi42IDBsNzItNzJjNi4yLTYuMiA2LjItMTYuNCAwLTIyLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default FileCircleCheck;