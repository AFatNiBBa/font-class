
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-medical?s=sharp-duotone-solid file-medical}
 * @preview ![file-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek05NiAyODhsMCA2NCA2NCAwIDAgNjQgNjQgMCAwLTY0IDY0IDAgMC02NC02NCAwIDAtNjQtNjQgMCAwIDY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwbC0xNjAgMEwyMjQgMCAzODQgMTYwek0xNjAgMjI0bDY0IDAgMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0LTY0IDAgMC02NC02NCAwIDAtNjQgNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileMedical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM96 288l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
            <path d="M384 160l-160 0L224 0 384 160zM160 224l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default FileMedical;