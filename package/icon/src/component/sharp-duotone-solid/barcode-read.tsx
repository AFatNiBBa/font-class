
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=sharp-duotone-solid barcode-read}
 * @preview ![barcode-read](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAyNCAwIDEzNmwwIDI0IDQ4IDAgMC0yNCAwLTg4IDg4IDAgMjQgMCAwLTQ4TDEzNiAwIDI0IDAgMCAwek0wIDM1MmwwIDI0TDAgNDg4bDAgMjQgMjQgMCAxMTIgMCAyNCAwIDAtNDgtMjQgMC04OCAwIDAtODggMC0yNEwwIDM1MnpNNDE2IDBsMCA0OCAyNCAwIDg4IDAgMCA4OCAwIDI0IDQ4IDAgMC0yNCAwLTExMiAwLTI0TDU1MiAwIDQ0MCAwIDQxNiAwem0wIDQ2NGwwIDQ4IDI0IDAgMTEyIDAgMjQgMCAwLTI0IDAtMTEyIDAtMjQtNDggMCAwIDI0IDAgODgtODggMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDEyOGwtNjQgMCAwIDI1NiA2NCAwIDAtMjU2em0xNjAgMGwtNjQgMCAwIDI1NiA2NCAwIDAtMjU2em0zMiAwbDAgMjU2IDY0IDAgMC0yNTYtNjQgMHptLTEyOCAwbC0zMiAwIDAgMjU2IDMyIDAgMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 24 0 136l0 24 48 0 0-24 0-88 88 0 24 0 0-48L136 0 24 0 0 0zM0 352l0 24L0 488l0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-88 0-24L0 352zM416 0l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24L552 0 440 0 416 0zm0 464l0 48 24 0 112 0 24 0 0-24 0-112 0-24-48 0 0 24 0 88-88 0-24 0z" />
            <path d="M192 128l-64 0 0 256 64 0 0-256zm160 0l-64 0 0 256 64 0 0-256zm32 0l0 256 64 0 0-256-64 0zm-128 0l-32 0 0 256 32 0 0-256z" />
    </Icon>
);

export default BarcodeRead;