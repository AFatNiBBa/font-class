
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lock?s=sharp-duotone-solid file-lock}
 * @preview ![file-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzMy42Yy0xOS44IDIwLjItMzIgNDcuOS0zMiA3OC40bDAgMTYtMzIgMCAwIDIyNEwwIDUxMiAwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwTDIyNCAwbDAgMTYwIDE2MCAwem04MCA4MGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDQ4LTY0IDAgMC00OGMwLTE3LjcgMTQuMy0zMiAzMi0zMnptLTgwIDMybDAgNDgtMzIgMCAwIDE5MiAyMjQgMCAwLTE5Mi0zMiAwIDAtNDhjMC00NC4yLTM1LjgtODAtODAtODBzLTgwIDM1LjgtODAgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 33.6c-19.8 20.2-32 47.9-32 78.4l0 16-32 0 0 224L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zm80 80c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default FileLock;