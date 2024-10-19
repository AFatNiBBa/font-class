
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-thin map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDI3MmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAxIDAgMCAyNTZ6TTMwNCAxNDRjMCA3Ni44LTYwLjIgMTM5LjYtMTM2IDE0My44TDE2OCA1MDRsMCA4LTE2IDAgMC04IDAtMjE2LjJDNzYuMiAyODMuNiAxNiAyMjAuOCAxNiAxNDRDMTYgNjQuNSA4MC41IDAgMTYwIDBzMTQ0IDY0LjUgMTQ0IDE0NHpNODAgMTM2bC0xNiAwYzAtNDguNiAzOS40LTg4IDg4LTg4bDAgMTZjLTM5LjggMC03MiAzMi4yLTcyIDcyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM304 144c0 76.8-60.2 139.6-136 143.8L168 504l0 8-16 0 0-8 0-216.2C76.2 283.6 16 220.8 16 144C16 64.5 80.5 0 160 0s144 64.5 144 144zM80 136l-16 0c0-48.6 39.4-88 88-88l0 16c-39.8 0-72 32.2-72 72z" />
    </Icon>
);

export default MapPin;