
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=duotone list-dropdown}
 * @preview ![list-dropdown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMDQgMjU2YzAgMTMuMyAxMC43IDI0IDI0IDI0bDI1NiAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC0yNTYgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6bTAgODhjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMjU2IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTI1NiAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzMjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDk2em02NCA5NmwwIDIyNCAzODQgMCAwLTIyNEw2NCAxOTJ6TTM2My4zIDk2Yy03LjEgMC0xMC43IDguNi01LjcgMTMuN2wzNi43IDM2LjdjMy4xIDMuMSA4LjIgMy4xIDExLjMgMGwzNi43LTM2LjdjNS01IDEuNS0xMy43LTUuNy0xMy43bC03My40IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M104 256c0 13.3 10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0c-13.3 0-24 10.7-24 24zm0 88c0 13.3 10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0c-13.3 0-24 10.7-24 24z" />
            <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 96l0 224 384 0 0-224L64 192zM363.3 96c-7.1 0-10.7 8.6-5.7 13.7l36.7 36.7c3.1 3.1 8.2 3.1 11.3 0l36.7-36.7c5-5 1.5-13.7-5.7-13.7l-73.4 0z" />
    </Icon>
);

export default ListDropdown;