
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=duotone gauge-low}
 * @preview ![gauge-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTE2LTEwNGMwLS4zIDAtLjYgMCAwek0yODggOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptMTEyIDQ4YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTQ4IDExMmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkwIDE0Mi4zYy01LjMtMTIuMS0xOS41LTE3LjYtMzEuNi0xMi4zcy0xNy42IDE5LjUtMTIuMyAzMS42bDY0LjEgMTQ1LjdDMTk4LjkgMzE4LjkgMTkyIDMzNC42IDE5MiAzNTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRzNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NGMtLjYgMC0xLjMgMC0xLjkgMEwxOTAgMTQyLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16-104c0-.3 0-.6 0 0zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm112 48a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M190 142.3c-5.3-12.1-19.5-17.6-31.6-12.3s-17.6 19.5-12.3 31.6l64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-.6 0-1.3 0-1.9 0L190 142.3z" />
    </Icon>
);

export default GaugeLow;