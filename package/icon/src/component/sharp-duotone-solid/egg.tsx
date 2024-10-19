
import { Icon, generic } from "../../index";

/**
 * A component that renders the `egg` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=sharp-duotone-solid egg}
 * @preview ![egg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEMwIDM5NCA4NiA0OTYgMTkyIDQ5NnMxOTItMTAyIDE5Mi0yMDhjMC0xMTItNjQtMjcyLTE5Mi0yNzJTMCAxNzYgMCAyODh6bTY0IDBjMC0yOC4zIDUuNy02MS45IDE2LjktOTMuNWMxMS4yLTMxLjUgMjguNC02Mi40IDUyLjMtODQuMkwxNTQuOCAxMzRjLTE4LjggMTcuMS0zMy42IDQyLjctNDMuNyA3MS4yQzEwMSAyMzMuNiA5NiAyNjMuNSA5NiAyODhsMCAxNi0zMiAwIDAtMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTEuMSAyMDUuMkMxMDEgMjMzLjYgOTYgMjYzLjUgOTYgMjg4bDAgMTYtMzIgMCAwLTE2YzAtMjguMyA1LjctNjEuOSAxNi45LTkzLjVjMTEuMi0zMS41IDI4LjQtNjIuNCA1Mi4zLTg0LjJMMTU0LjggMTM0Yy0xOC44IDE3LjEtMzMuNiA0Mi43LTQzLjcgNzEuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zm64 0c0-28.3 5.7-61.9 16.9-93.5c11.2-31.5 28.4-62.4 52.3-84.2L154.8 134c-18.8 17.1-33.6 42.7-43.7 71.2C101 233.6 96 263.5 96 288l0 16-32 0 0-16z" />
            <path d="M111.1 205.2C101 233.6 96 263.5 96 288l0 16-32 0 0-16c0-28.3 5.7-61.9 16.9-93.5c11.2-31.5 28.4-62.4 52.3-84.2L154.8 134c-18.8 17.1-33.6 42.7-43.7 71.2z" />
    </Icon>
);

export default Egg;