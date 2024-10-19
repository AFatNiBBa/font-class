
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=sharp-duotone-solid bring-forward}
 * @preview ![bring-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzUybDAgOTYgMCA2NCA2NCAwIDIyNCAwIDY0IDAgMC02NCAwLTIyNCAwLTY0LTY0IDAtOTYgMCAwIDY0IDk2IDAgMCAyMjQtMjI0IDAgMC05Ni02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzNTJIMzUyVjBIMFYzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 352l0 96 0 64 64 0 224 0 64 0 0-64 0-224 0-64-64 0-96 0 0 64 96 0 0 224-224 0 0-96-64 0z" />
            <path d="M0 352H352V0H0V352z" />
    </Icon>
);

export default BringForward;