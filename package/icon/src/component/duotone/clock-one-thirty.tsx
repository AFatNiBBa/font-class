
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-one-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one-thirty?s=duotone clock-one-thirty}
 * @preview ![clock-one-thirty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTIzMiAwYzAtNC43IDEuNC05LjQgNC0xMy4zbDY0LTk2YzcuNC0xMSAyMi4zLTE0IDMzLjMtNi43YzYuOSA0LjYgMTAuNyAxMi4yIDEwLjcgMjBjMCA0LjYtMS4zIDkuMi00IDEzLjNsLTYwIDkwTDI4MCAzOTJjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xMzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNDE2YzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtMTI4LjcgNjAtOTBjNy40LTExIDQuNC0yNS45LTYuNy0zMy4zcy0yNS45LTQuNC0zMy4zIDYuN2wtNjQgOTZjLTIuNiAzLjktNCA4LjYtNCAxMy4zbDAgMTM2YzAgMTMuMyAxMC43IDI0IDI0IDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockOneThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0c0-4.7 1.4-9.4 4-13.3l64-96c7.4-11 22.3-14 33.3-6.7c6.9 4.6 10.7 12.2 10.7 20c0 4.6-1.3 9.2-4 13.3l-60 90L280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
            <path d="M256 416c13.3 0 24-10.7 24-24l0-128.7 60-90c7.4-11 4.4-25.9-6.7-33.3s-25.9-4.4-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3l0 136c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default ClockOneThirty;