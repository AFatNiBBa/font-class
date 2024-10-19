
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=sharp-duotone-solid arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDMyQzAgMzk3LjQgMTE0LjYgNTEyIDI1NiA1MTJzMjU2LTExNC42IDI1Ni0yNTZsMC0zMi02NCAwIDAgMzJjMCAxMDYtODYgMTkyLTE5MiAxOTJTNjQgMzYyIDY0IDI1NmwwLTMyTDAgMjI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTguNyAxNjBsMjIuNi0yMi42IDExMi0xMTJMMjU2IDIuN2wyMi42IDIyLjYgMTEyIDExMkw0MTMuMyAxNjAgMzY4IDIwNS4zbC0yMi42LTIyLjZMMjg4IDEyNS4zIDI4OCAzMjBsMCAzMi02NCAwIDAtMzIgMC0xOTQuNy01Ny40IDU3LjRMMTQ0IDIwNS4zIDk4LjcgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 32C0 397.4 114.6 512 256 512s256-114.6 256-256l0-32-64 0 0 32c0 106-86 192-192 192S64 362 64 256l0-32L0 224z" />
            <path d="M98.7 160l22.6-22.6 112-112L256 2.7l22.6 22.6 112 112L413.3 160 368 205.3l-22.6-22.6L288 125.3 288 320l0 32-64 0 0-32 0-194.7-57.4 57.4L144 205.3 98.7 160z" />
    </Icon>
);

export default ArrowUpFromArc;