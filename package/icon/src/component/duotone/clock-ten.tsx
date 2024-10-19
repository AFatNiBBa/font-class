
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-ten` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten?s=duotone clock-ten}
 * @preview ![clock-ten](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0MC03Ny4zYzcuNC0xMSAyMi4zLTE0IDMzLjMtNi43TDIzMiAyMTEuMmwwLTkxLjJjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDEzNmMwIDguOS00LjkgMTctMTIuNyAyMS4ycy0xNy4zIDMuNy0yNC42LTEuMmwtOTYtNjRjLTExLTcuNC0xNC0yMi4zLTYuNy0zMy4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDk2Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDkxLjJMMTczLjMgMTcyYy0xMS03LjQtMjUuOS00LjQtMzMuMyA2LjdzLTQuNCAyNS45IDYuNyAzMy4zbDk2IDY0YzcuNCA0LjkgMTYuOCA1LjQgMjQuNiAxLjJTMjgwIDI2NC45IDI4MCAyNTZsMC0xMzZjMC0xMy4zLTEwLjctMjQtMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockTen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm140-77.3c7.4-11 22.3-14 33.3-6.7L232 211.2l0-91.2c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 8.9-4.9 17-12.7 21.2s-17.3 3.7-24.6-1.2l-96-64c-11-7.4-14-22.3-6.7-33.3z" />
            <path d="M256 96c-13.3 0-24 10.7-24 24l0 91.2L173.3 172c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l96 64c7.4 4.9 16.8 5.4 24.6 1.2S280 264.9 280 256l0-136c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default ClockTen;