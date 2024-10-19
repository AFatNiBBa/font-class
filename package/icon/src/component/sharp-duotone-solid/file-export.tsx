
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-export` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=sharp-duotone-solid file-export}
 * @preview ![file-export](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAxMjgtMTY4IDAtMjQgMCAwIDQ4IDI0IDAgMTY4IDAgMCAxNzZMMCA1MTIgMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MEwyMjQgMGwwIDE2MCAxNjAgMHptMTA1IDU1bC0xNy0xN0w0MzguMSAyMzJsMTcgMTcgMzkgMzlMMjE2IDI4OGwtMjQgMCAwIDQ4IDI0IDAgMjc4LjEgMC0zOSAzOS0xNyAxN0w0NzIgNDI1LjlsMTctMTcgODAtODAgMTctMTctMTctMTctODAtODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 128-168 0-24 0 0 48 24 0 168 0 0 176L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zm105 55l-17-17L438.1 232l17 17 39 39L216 288l-24 0 0 48 24 0 278.1 0-39 39-17 17L472 425.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default FileExport;