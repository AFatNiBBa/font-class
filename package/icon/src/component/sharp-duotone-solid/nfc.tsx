
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=sharp-duotone-solid nfc}
 * @preview ![nfc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMjhsMCAyNTYgMjU2IDAgMC0yNTYtMTEyIDAgMCA4Mi43YzE4LjYgNi42IDMyIDI0LjQgMzIgNDUuM2MwIDI2LjUtMjEuNSA0OC00OCA0OHMtNDgtMjEuNS00OC00OGMwLTIwLjkgMTMuNC0zOC43IDMyLTQ1LjNsMC04Mi43LTQ4IDAtMTYgMC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTgwIDk2bDY0IDAgMTYgMCAwIDMyIDQ4IDAgMC0xNiAwLTE2IDE2IDAgMTQ0IDAgMTYgMCAwIDE2IDAgMjg4IDAgMTYtMTYgMEw4MCA0MTZsLTE2IDAgMC0xNiAwLTI4OCAwLTE2IDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128l0 256 256 0 0-256-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-82.7-48 0-16 0-48 0z" />
            <path d="M448 32L0 32 0 480l448 0 0-448zM80 96l64 0 16 0 0 32 48 0 0-16 0-16 16 0 144 0 16 0 0 16 0 288 0 16-16 0L80 416l-16 0 0-16 0-288 0-16 16 0z" />
    </Icon>
);

export default Nfc;