
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-duotone-solid fence}
 * @preview ![fence](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTYwbDAgNjQgNjQgMCAwLTY0LTY0IDB6bTAgMTkybDAgNjQgNjQgMCAwLTY0LTY0IDB6TTMyMCAxNjBsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxOTJsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDMyTDAgOTYgMCA0ODBsMTI4IDAgMC0zODRMNjQgMzJ6TTE5MiA5NmwwIDM4NCAxMjggMCAwLTM4NEwyNTYgMzIgMTkyIDk2em0xOTIgMGwwIDM4NCAxMjggMCAwLTM4NEw0NDggMzIgMzg0IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 160l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zM320 160l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0z" />
            <path d="M64 32L0 96 0 480l128 0 0-384L64 32zM192 96l0 384 128 0 0-384L256 32 192 96zm192 0l0 384 128 0 0-384L448 32 384 96z" />
    </Icon>
);

export default Fence;