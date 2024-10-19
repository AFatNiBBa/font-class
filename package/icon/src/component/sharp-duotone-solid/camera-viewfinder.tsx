
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=sharp-duotone-solid camera-viewfinder}
 * @preview ![camera-viewfinder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAyNCAwIDEzNmwwIDI0IDQ4IDAgMC0yNCAwLTg4IDg4IDAgMjQgMCAwLTQ4TDEzNiAwIDI0IDAgMCAwek0wIDM1MmwwIDI0TDAgNDg4bDAgMjQgMjQgMCAxMTIgMCAyNCAwIDAtNDgtMjQgMC04OCAwIDAtODggMC0yNEwwIDM1MnpNMzUyIDBsMCA0OCAyNCAwIDg4IDAgMCA4OCAwIDI0IDQ4IDAgMC0yNCAwLTExMiAwLTI0TDQ4OCAwIDM3NiAwIDM1MiAwem0wIDQ2NGwwIDQ4IDI0IDAgMTEyIDAgMjQgMCAwLTI0IDAtMTEyIDAtMjQtNDggMCAwIDI0IDAgODgtODggMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDk2bC0xMiAzMi04NCAwIDAgMjU2IDMyMCAwIDAtMjU2LTg0IDBMMzIwIDk2IDE5MiA5NnptNjQgOTZhNjQgNjQgMCAxIDEgMCAxMjggNjQgNjQgMCAxIDEgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CameraViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 24 0 136l0 24 48 0 0-24 0-88 88 0 24 0 0-48L136 0 24 0 0 0zM0 352l0 24L0 488l0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-88 0-24L0 352zM352 0l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24L488 0 376 0 352 0zm0 464l0 48 24 0 112 0 24 0 0-24 0-112 0-24-48 0 0 24 0 88-88 0-24 0z" />
            <path d="M192 96l-12 32-84 0 0 256 320 0 0-256-84 0L320 96 192 96zm64 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default CameraViewfinder;