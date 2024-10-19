
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=duotone sidebar-flip}
 * @preview ![sidebar-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDIyNCAwIDAgNDQ4TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAzMmMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDMyMGMwIDM1LjMtMjguNyA2NC02NCA2NGwtMTYwIDAgMC00NDggMTYwIDB6TTQyNCA5NmwtNDggMGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGw0OCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0em0yNCAxMjBjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTQ4IDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRsNDggMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHptLTI0IDcybC00OCAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0bDQ4IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l224 0 0 448L64 480c-35.3 0-64-28.7-64-64L0 96z" />
            <path d="M448 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-160 0 0-448 160 0zM424 96l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zm24 120c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24zm-24 72l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default SidebarFlip;