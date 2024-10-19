
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-lock?s=sharp-duotone-solid nfc-lock}
 * @preview ![nfc-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDMyMCAwIDAtNjRMODAgNDE2bC0xNiAwIDAtMTYgMC0yODggMC0xNiAxNiAwIDY0IDAgMTYgMCAwIDMyLTE2IDAtNDggMCAwIDI1NiAyMjQgMCAwLTk2IDMyIDAgMC0xNiAwLTE0NC0xMTIgMCAwIDgyLjdjMTguNiA2LjYgMzIgMjQuNCAzMiA0NS4zYzAgMjYuNS0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4YzAtMjAuOSAxMy40LTM4LjcgMzItNDUuM2wwLTk4LjcgMC0xNiAxNiAwIDE0NCAwIDE2IDAgMCAxNiAwIDgxLjZjMTYuOC0xNy4xIDM5LjEtMjguOSA2NC0zMi41TDQ0OCAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyIDI3MmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptLTQ4IDQ4bDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4IDMyIDAgMCAxOTItMjI0IDAgMC0xOTIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const NfcLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l320 0 0-64L80 416l-16 0 0-16 0-288 0-16 16 0 64 0 16 0 0 32-16 0-48 0 0 256 224 0 0-96 32 0 0-16 0-144-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-98.7 0-16 16 0 144 0 16 0 0 16 0 81.6c16.8-17.1 39.1-28.9 64-32.5L448 32 0 32z" />
            <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default NfcLock;