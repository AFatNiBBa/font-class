
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-duotone-solid file-image}
 * @preview ![file-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek02NCAyNTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHptMCAxNjBsMCAzMiA2NCAwIDY0IDAgMTI4IDAgMC0zMkwyMjQgMjg4bC02My41IDg0LjdMMTI4IDMyOCA2NCA0MTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwbC0xNjAgMEwyMjQgMCAzODQgMTYwek0zMjAgNDE2bDAgMzItMTI4IDAtNjQgMC02NCAwIDAtMzIgNjQtODggMzIuNSA0NC43TDIyNCAyODhsOTYgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 160l0 32 64 0 64 0 128 0 0-32L224 288l-63.5 84.7L128 328 64 416z" />
            <path d="M384 160l-160 0L224 0 384 160zM320 416l0 32-128 0-64 0-64 0 0-32 64-88 32.5 44.7L224 288l96 128z" />
    </Icon>
);

export default FileImage;