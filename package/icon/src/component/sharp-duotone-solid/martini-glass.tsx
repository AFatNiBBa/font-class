
import { Icon, generic } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=sharp-duotone-solid martini-glass}
 * @preview ![martini-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA0OCAxNiA2NCAyMTAuNyAyNTguNyAyMjQgMjcybDAgMTc2LTY0IDAtMzIgMCAwIDY0IDMyIDAgOTYgMCA5NiAwIDMyIDAgMC02NC0zMiAwLTY0IDAgMC0xNzYgMTMuMy0xMy4zTDQ5NiA2NGwxNi0xNiAwLTQ4TDQ0OCAwIDY0IDAgMCAwek0xMDYuNSA2NGwyOTkgMGMtMjEuMyAyMS4zLTQyLjcgNDIuNy02NCA2NEwyNTYgMjEzLjVjLTI4LjUtMjguNS01Ny01Ny04NS41LTg1LjVsLTY0LTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzQxLjUgMTI4bC0xNzEgMEwyNTYgMjEzLjUgMzQxLjUgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 48 16 64 210.7 258.7 224 272l0 176-64 0-32 0 0 64 32 0 96 0 96 0 32 0 0-64-32 0-64 0 0-176 13.3-13.3L496 64l16-16 0-48L448 0 64 0 0 0zM106.5 64l299 0c-21.3 21.3-42.7 42.7-64 64L256 213.5c-28.5-28.5-57-57-85.5-85.5l-64-64z" />
            <path d="M341.5 128l-171 0L256 213.5 341.5 128z" />
    </Icon>
);

export default MartiniGlass;