
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=duotone circle-j}
 * @preview ![circle-j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NCAyNGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0bDAgOGMwIDI2LjUgMjEuNSA0OCA0OCA0OHM0OC0yMS41IDQ4LTQ4bDAtMTM2YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRsMCAxMzZjMCA1My00MyA5Ni05NiA5NnMtOTYtNDMtOTYtOTZsMC04eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzEyIDEyOGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDEzNmMwIDUzLTQzIDk2LTk2IDk2cy05Ni00My05Ni05NmwwLThjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDhjMCAyNi41IDIxLjUgNDggNDggNDhzNDgtMjEuNSA0OC00OGwwLTEzNmMwLTEzLjMgMTAuNy0yNCAyNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 53-43 96-96 96s-96-43-96-96l0-8z" />
            <path d="M312 128c13.3 0 24 10.7 24 24l0 136c0 53-43 96-96 96s-96-43-96-96l0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 26.5 21.5 48 48 48s48-21.5 48-48l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CircleJ;