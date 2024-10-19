
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-users` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-users?s=sharp-duotone-solid calendar-users}
 * @preview ![calendar-users](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGw5NiAwIDAtNjQgNjQgMCAwIDY0IDEyOCAwIDAtNjQgNjQgMCAwIDY0IDk2IDAgMCA5Nkw5NiAxNjBsMC05NnptMzIgMTI4bDM4NCAwIDAgMS4xYy01NC4zIDcuOC05NiA1NC40LTk2IDExMC45YzAgMzEuMyAxMi45IDU5LjcgMzMuNiA4MEw0MjQgMzg0IDM3OS4yIDUxMmwtMTE4LjQgMEwyMTYgMzg0bC0yNS42IDBjMjAuNy0yMC4zIDMzLjYtNDguNyAzMy42LTgwYzAtNTYuNC00MS43LTEwMy4xLTk2LTExMC45bDAtMS4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMzA0YTgwIDgwIDAgMSAxIDE2MCAwQTgwIDgwIDAgMSAxIDMyIDMwNHpNMTkyIDQxNmwzMiA5NkwwIDUxMmwzMi05NiAxNjAgMHpNNDQ4IDMwNGE4MCA4MCAwIDEgMSAxNjAgMCA4MCA4MCAwIDEgMSAtMTYwIDB6TTYwOCA0MTZsMzIgOTYtMjI0IDAgMzItOTYgMTYwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 64l96 0 0-64 64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 96L96 160l0-96zm32 128l384 0 0 1.1c-54.3 7.8-96 54.4-96 110.9c0 31.3 12.9 59.7 33.6 80L424 384 379.2 512l-118.4 0L216 384l-25.6 0c20.7-20.3 33.6-48.7 33.6-80c0-56.4-41.7-103.1-96-110.9l0-1.1z" />
            <path d="M32 304a80 80 0 1 1 160 0A80 80 0 1 1 32 304zM192 416l32 96L0 512l32-96 160 0zM448 304a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM608 416l32 96-224 0 32-96 160 0z" />
    </Icon>
);

export default CalendarUsers;