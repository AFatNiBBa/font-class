
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-pen?s=sharp-duotone-solid nfc-pen}
 * @preview ![nfc-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDI1OCAwIDktNjIuNiAxLjQtMS40TDgwIDQxNmwtMTYgMCAwLTE2IDAtMjg4IDAtMTYgMTYgMCA2NCAwIDE2IDAgMCAzMi0xNiAwLTQ4IDAgMCAyNTYgMjA0LjQgMEwzNTIgMzMyLjQgMzUyIDEyOGwtMTEyIDAgMCA4Mi43YzE4LjYgNi42IDMyIDI0LjQgMzIgNDUuM2MwIDI2LjUtMjEuNSA0OC00OCA0OHMtNDgtMjEuNS00OC00OGMwLTIwLjkgMTMuNC0zOC43IDMyLTQ1LjNsMC05OC43IDAtMTYgMTYgMCAxNDQgMCAxNiAwIDAgMTYgMCAxODguNCA2NC02NEw0NDggMzIgMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAyOTQuOGwtNzEtNzEtNDEuMyA0MS4zIDcxIDcxTDU3NiAyOTQuOHptLTYzLjkgNjMuOWwtNzEtNzFMMjk5LjkgNDI5IDI4OCA1MTEuOSAzNzAuOSA1MDAgNTEyLjEgMzU4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const NfcPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l258 0 9-62.6 1.4-1.4L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 204.4 0L352 332.4 352 128l-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16 0 188.4 64-64L448 32 0 32z" />
            <path d="M576 294.8l-71-71-41.3 41.3 71 71L576 294.8zm-63.9 63.9l-71-71L299.9 429 288 511.9 370.9 500 512.1 358.7z" />
    </Icon>
);

export default NfcPen;