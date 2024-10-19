
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-video` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=sharp-duotone-solid file-video}
 * @preview ![file-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek02NCAyNTZsMCAxNjAgMTYwIDAgMC0xNjBMNjQgMjU2em0xOTIgNDhsMCA2NCA2NCAzMiAwLTEyOC02NCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxNjAgMTYwIDB6TTY0IDI1NmwwIDE2MCAxNjAgMCAwLTE2MEw2NCAyNTZ6TTMyMCA0MDBsMC0xMjgtNjQgMzIgMCA2NCA2NCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 256l0 160 160 0 0-160L64 256zm192 48l0 64 64 32 0-128-64 32z" />
            <path d="M384 160L224 0l0 160 160 0zM64 256l0 160 160 0 0-160L64 256zM320 400l0-128-64 32 0 64 64 32z" />
    </Icon>
);

export default FileVideo;