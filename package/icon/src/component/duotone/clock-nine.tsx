
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-nine` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine?s=duotone clock-nine}
 * @preview ![clock-nine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOCAwYzAtMTMuMyAxMC43LTI0IDI0LTI0bDgwIDAgMC0xMTJjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDEzNmMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMTA0IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDk2YzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMTM2YzAgMTMuMy0xMC43IDI0LTI0IDI0bC0xMDQgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGw4MCAwIDAtMTEyYzAtMTMuMyAxMC43LTI0IDI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockNine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0c0-13.3 10.7-24 24-24l80 0 0-112c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 13.3-10.7 24-24 24l-104 0c-13.3 0-24-10.7-24-24z" />
            <path d="M256 96c13.3 0 24 10.7 24 24l0 136c0 13.3-10.7 24-24 24l-104 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0 0-112c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockNine;