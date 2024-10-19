
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=sharp-duotone-solid envelope-open}
 * @preview ![envelope-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRMMjU2IDgwIDQ0OCAyMjRsMCAyMi45TDI1NiAzODQgNjQgMjQ2LjkgNjQgMjI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMjQ2LjlMMjU2IDM4NCA0NDggMjQ2LjlsMC0yMi45TDI1NiA4MCA2NCAyMjRsMCAyMi45ek0wIDE5MkwyNTYgMCA1MTIgMTkybDAgMjU2IDAgNjQtNjQgMEw2NCA1MTIgMCA1MTJsMC02NEwwIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224L256 80 448 224l0 22.9L256 384 64 246.9 64 224z" />
            <path d="M64 246.9L256 384 448 246.9l0-22.9L256 80 64 224l0 22.9zM0 192L256 0 512 192l0 256 0 64-64 0L64 512 0 512l0-64L0 192z" />
    </Icon>
);

export default EnvelopeOpen;