
import { Icon, generic } from "../../index";

/**
 * A component that renders the `messages` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=duotone messages}
 * @preview ![messages](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMzUybDk2IDBjNTMgMCA5Ni00MyA5Ni05NmwwLTEyOCAxMjggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDE5MmMwIDM1LjMtMjguNyA2NC02NCA2NGwtMzIgMCAwIDQ4YzAgNi4xLTMuNCAxMS42LTguOCAxNC4zcy0xMS45IDIuMS0xNi44LTEuNUw0MzcuMyA0NDggMzIwIDQ0OGMtMzUuMyAwLTY0LTI4LjctNjQtNjRsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNjRDMCAyOC43IDI4LjcgMCA2NCAwTDM1MiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMTkyYzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xNDkuMyAwLTgxLjEgNjAuOGMtNC44IDMuNi0xMS4zIDQuMi0xNi44IDEuNXMtOC44LTguMi04LjgtMTQuM2wwLTQ4LTMyIDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 352l96 0c53 0 96-43 96-96l0-128 128 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-32 0 0 48c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448 320 448c-35.3 0-64-28.7-64-64l0-32z" />
            <path d="M0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-149.3 0-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-48-32 0c-35.3 0-64-28.7-64-64L0 64z" />
    </Icon>
);

export default Messages;