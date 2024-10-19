
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=duotone hexagon-exclamation}
 * @preview ![hexagon-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03LjQgMjU2YzAgMTIuNCAzLjIgMjQuOSA5LjYgMzZsODguMyAxNTIuOWMxMi45IDIyLjMgMzYuNiAzNiA2Mi40IDM2bDE3Ni42IDBjMjUuNyAwIDQ5LjUtMTMuNyA2Mi40LTM2TDQ5NC45IDI5MmM2LjQtMTEuMSA5LjYtMjMuNiA5LjYtMzZzLTMuMi0yNC45LTkuNi0zNkw0MDYuNiA2Ny4xYy0xMi45LTIyLjMtMzYuNi0zNi02Mi40LTM2bC0xNzYuNiAwYy0yNS43IDAtNDkuNSAxMy43LTYyLjQgMzZMMTcuMSAyMjBjLTYuNCAxMS4xLTkuNiAyMy42LTkuNiAzNnpNMjg4IDM1MmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwek0yMzIgMTUyYzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRsMCAxMTJjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xMTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgMTUyYzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0bDAgMTEyYzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xMTJ6TTI1NiAzODRhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.4 256c0 12.4 3.2 24.9 9.6 36l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c6.4-11.1 9.6-23.6 9.6-36s-3.2-24.9-9.6-36L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220c-6.4 11.1-9.6 23.6-9.6 36zM288 352a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM232 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
            <path d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default HexagonExclamation;