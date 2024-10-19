
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=sharp-duotone-solid objects-align-bottom}
 * @preview ![objects-align-bottom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDAgMzg0IDE2MCAwTDIyNCAwIDY0IDB6TTI4OCAxMjhsMCAyNTYgMTYwIDAgMC0yNTYtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDUxMmw1MTIgMCAwLTQ4TDAgNDY0bDAgNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 384 160 0L224 0 64 0zM288 128l0 256 160 0 0-256-160 0z" />
            <path d="M0 512l512 0 0-48L0 464l0 48z" />
    </Icon>
);

export default ObjectsAlignBottom;