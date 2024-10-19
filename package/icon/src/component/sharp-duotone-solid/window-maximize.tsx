
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=sharp-duotone-solid window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5NmwzODQgMCAwIDY0TDY0IDE2MGwwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0ODBsNTEyIDAgMC00NDhMMCAzMiAwIDQ4MHpNNDQ4IDk2bDAgNjRMNjQgMTYwbDAtNjQgMzg0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 96l384 0 0 64L64 160l0-64z" />
            <path d="M0 480l512 0 0-448L0 32 0 480zM448 96l0 64L64 160l0-64 384 0z" />
    </Icon>
);

export default WindowMaximize;