
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=sharp-duotone-solid tickets-simple}
 * @preview ![tickets-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmw1NDQgMCAwIDEyOGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhzMjEuNSA0OCA0OCA0OGwwIDEyOEw5NiAzODRsMC0xMjhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDhMOTYgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OCA5NmwwIDI0IDAgMzEyIDQ3MiAwIDI0IDAgMCA0OC0yNCAwTDI0IDQ4MCAwIDQ4MGwwLTI0TDAgMTIwIDAgOTZsNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l544 0 0 128c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 128L96 384l0-128c26.5 0 48-21.5 48-48s-21.5-48-48-48L96 32z" />
            <path d="M48 96l0 24 0 312 472 0 24 0 0 48-24 0L24 480 0 480l0-24L0 120 0 96l48 0z" />
    </Icon>
);

export default TicketsSimple;