
import { Icon, generic } from "../../index";

/**
 * A component that renders the `xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=sharp-duotone-solid xmark}
 * @preview ![xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODEuNCAzOTAuNkwzMDQgNDEzLjMgMzQ5LjMgMzY4bC0yMi42LTIyLjZMMjM3LjMgMjU2bDg5LjQtODkuNEwzNDkuMyAxNDQgMzA0IDk4LjdsLTIyLjYgMjIuNkwxOTIgMjEwLjdsLTg5LjQtODkuNEw4MCA5OC43IDM0LjcgMTQ0bDIyLjYgMjIuNkwxNDYuNyAyNTYgNTcuNCAzNDUuNCAzNC43IDM2OCA4MCA0MTMuM2wyMi42LTIyLjZMMTkyIDMwMS4zbDg5LjQgODkuNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M281.4 390.6L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4z" />
    </Icon>
);

export default Xmark;