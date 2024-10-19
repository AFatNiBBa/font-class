
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-duotone-solid spinner}
 * @preview ![spinner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MSA0MDMuMWw2Ny45LTY3LjkgNjcuOSA2Ny45TDEwOC45IDQ3MSA0MSA0MDMuMXpNMjA4IDQxNmw5NiAwIDAgOTYtOTYgMCAwLTk2ek0zMzUuMiAxMDguOUw0MDMuMSA0MSA0NzEgMTA4LjlsLTY3LjkgNjcuOS02Ny45LTY3Ljl6bTAgMjk0LjJsNjcuOS02Ny45TDQ3MSA0MDMuMSA0MDMuMSA0NzFsLTY3LjktNjcuOXpNNDE2IDIwOGw5NiAwIDAgOTYtOTYgMCAwLTk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjA4IDk2bDk2IDAgMC05NkwyMDggMGwwIDk2ek0wIDIwOGwwIDk2IDk2IDAgMC05NkwwIDIwOHptNDEtOTkuMWw2Ny45IDY3LjkgNjcuOS02Ny45TDEwOC45IDQxIDQxIDEwOC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M41 403.1l67.9-67.9 67.9 67.9L108.9 471 41 403.1zM208 416l96 0 0 96-96 0 0-96zM335.2 108.9L403.1 41 471 108.9l-67.9 67.9-67.9-67.9zm0 294.2l67.9-67.9L471 403.1 403.1 471l-67.9-67.9zM416 208l96 0 0 96-96 0 0-96z" />
            <path d="M208 96l96 0 0-96L208 0l0 96zM0 208l0 96 96 0 0-96L0 208zm41-99.1l67.9 67.9 67.9-67.9L108.9 41 41 108.9z" />
    </Icon>
);

export default Spinner;