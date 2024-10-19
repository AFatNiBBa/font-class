
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=thin map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDI3MmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAxIDAgMCAyNTZ6TTMwNCAxNDRjMCA3Ni44LTYwLjIgMTM5LjYtMTM2IDE0My44TDE2OCA1MDRjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThsMC0yMTYuMkM3Ni4yIDI4My42IDE2IDIyMC44IDE2IDE0NEMxNiA2NC41IDgwLjUgMCAxNjAgMHMxNDQgNjQuNSAxNDQgMTQ0ek04MCAxMzZjMCA0LjQtMy42IDgtOCA4cy04LTMuNi04LThjMC00OC42IDM5LjQtODggODgtODhjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDhjLTM5LjggMC03MiAzMi4yLTcyIDcyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 272a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM304 144c0 76.8-60.2 139.6-136 143.8L168 504c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-216.2C76.2 283.6 16 220.8 16 144C16 64.5 80.5 0 160 0s144 64.5 144 144zM80 136c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-48.6 39.4-88 88-88c4.4 0 8 3.6 8 8s-3.6 8-8 8c-39.8 0-72 32.2-72 72z" />
    </Icon>
);

export default MapPin;