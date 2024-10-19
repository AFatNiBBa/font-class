
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=duotone clock-rotate-left}
 * @preview ![clock-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDU3LjlMMCAxNjhjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMTEwLjEgMGMyMS40IDAgMzIuMS0yNS45IDE3LTQxbC0zMC44LTMwLjhDMTU1IDg1LjUgMjAzIDY0IDI1NiA2NGMxMDYgMCAxOTIgODYgMTkyIDE5MnMtODYgMTkyLTE5MiAxOTJjLTQwLjggMC03OC42LTEyLjctMTA5LjctMzQuNGMtMTQuNS0xMC4xLTM0LjQtNi42LTQ0LjYgNy45cy02LjYgMzQuNCA3LjkgNDQuNkMxNTEuMiA0OTUgMjAxLjcgNTEyIDI1NiA1MTJjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwQzE4NS4zIDAgMTIxLjMgMjguNyA3NSA3NUw0MSA0MUMyNS45IDI1LjkgMCAzNi42IDAgNTcuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxMjhjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCA5NC4xIDY1IDY1YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45cy0yNC42IDkuNC0zMy45IDBsLTcyLTcyYy00LjUtNC41LTctMTAuNi03LTE3bDAtMTA0YzAtMTMuMyAxMC43LTI0IDI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75L41 41C25.9 25.9 0 36.6 0 57.9z" />
            <path d="M256 128c13.3 0 24 10.7 24 24l0 94.1 65 65c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72c-4.5-4.5-7-10.6-7-17l0-104c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockRotateLeft;