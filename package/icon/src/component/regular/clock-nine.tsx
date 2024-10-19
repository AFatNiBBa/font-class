
import { Icon } from "../../index";

/**
 * A component that renders the `clock-nine` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine?s=regular clock-nine}
 * @preview ![clock-nine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI4MCAxMjBsMCAxMzZjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTEwNCAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0bDgwIDAgMC0xMTJjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockNine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM280 120l0 136c0 13.3-10.7 24-24 24l-104 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0 0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockNine;