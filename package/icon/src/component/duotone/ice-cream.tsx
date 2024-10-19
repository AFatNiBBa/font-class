
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=duotone ice-cream}
 * @preview ![ice-cream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyMDhjMCAyNi41IDIxLjUgNDggNDggNDhsNTMuNSAwIDE4MSAwIDUzLjUgMGMyNi41IDAgNDgtMjEuNSA0OC00OHMtMjEuNS00OC00OC00OGwtLjkgMGMuNi01LjMgLjktMTAuNiAuOS0xNkMzNjggNjQuNSAzMDMuNSAwIDIyNCAwUzgwIDY0LjUgODAgMTQ0YzAgNS40IC4zIDEwLjcgLjkgMTZsLS45IDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTk5LjggNDk1LjZMODAgMjU2SDM3Mi42TDI1Mi43IDQ5NS42Yy01IDEwLTE1LjMgMTYuNC0yNi41IDE2LjRzLTIxLjUtNi4zLTI2LjUtMTYuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 208c0 26.5 21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48z" />
            <path d="M199.8 495.6L80 256H372.6L252.7 495.6c-5 10-15.3 16.4-26.5 16.4s-21.5-6.3-26.5-16.4z" />
    </Icon>
);

export default IceCream;