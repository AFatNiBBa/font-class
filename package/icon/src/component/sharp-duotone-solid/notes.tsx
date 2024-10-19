
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-duotone-solid notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDM4NCAyNTYgMCAwLTEyOCAxMjggMCAwLTI1Nkw5NiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5NiA0NjRsMjQgMCAwIDQ4LTI0IDBMMjQgNTEyIDAgNTEybDAtMjRMMCAxNTJsMC0yNCA0OCAwIDAgMjQgMCAzMTIgMjQ4IDB6bTU2LTQ4bDAtMTI4IDEyOCAwTDM1MiA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 32l0 384 256 0 0-128 128 0 0-256L96 32z" />
            <path d="M296 464l24 0 0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0zm56-48l0-128 128 0L352 416z" />
    </Icon>
);

export default Notes;