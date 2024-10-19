
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=sharp-duotone-solid pi}
 * @preview ![pi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NEwwIDY0bDAgNjQgMzIgMCA2NCAwIDAgMjE3LjhMNjYuMyA0MjAuMWw1OS40IDIzLjggMzItODAgMi4zLTUuNyAwLTYuMiAwLTIyNCAxMjggMCAwIDI4OCAwIDMyIDMyIDAgODAgMCAyMy4xIDAgNy4zLTIxLjkgMTYtNDgtNjAuNy0yMC4yTDM3Ni45IDM4NCAzNTIgMzg0bDAtMjU2IDY0IDAgMzIgMCAwLTY0LTMyIDBMMzIgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 64L0 64l0 64 32 0 64 0 0 217.8L66.3 420.1l59.4 23.8 32-80 2.3-5.7 0-6.2 0-224 128 0 0 288 0 32 32 0 80 0 23.1 0 7.3-21.9 16-48-60.7-20.2L376.9 384 352 384l0-256 64 0 32 0 0-64-32 0L32 64z" />
    </Icon>
);

export default Pi;