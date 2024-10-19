
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=sharp-duotone-solid hamsa}
 * @preview ![hamsa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDQ4TDk1LjQgNDQxYzQxLjEgNDUuMiA5OS40IDcxIDE2MC42IDcxczExOS40LTI1LjggMTYwLjYtNzFMNTEyIDMzNmwwLTQ4LTk2IDAgMC0yNTYtODAgMCAwIDE5Mi00MCAwTDI5NiAwIDIxNiAwbDAgMjI0LTQwIDAgMC0xOTJMOTYgMzJsMCAyNTZMMCAyODh6bTE2MCA2NHM0OC02NCA5Ni02NHM5NiA2NCA5NiA2NHMtNDggNjQtOTYgNjRzLTk2LTY0LTk2LTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDM1MmEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 48L95.4 441c41.1 45.2 99.4 71 160.6 71s119.4-25.8 160.6-71L512 336l0-48-96 0 0-256-80 0 0 192-40 0L296 0 216 0l0 224-40 0 0-192L96 32l0 256L0 288zm160 64s48-64 96-64s96 64 96 64s-48 64-96 64s-96-64-96-64z" />
            <path d="M224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Hamsa;