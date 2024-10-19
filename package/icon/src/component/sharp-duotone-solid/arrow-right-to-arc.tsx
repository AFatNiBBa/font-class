
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=sharp-duotone-solid arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGwwIDY0YzEwNiAwIDE5MiA4NiAxOTIgMTkycy04NiAxOTItMTkyIDE5MmwwIDY0YzE0MS40IDAgMjU2LTExNC42IDI1Ni0yNTZTMzk3LjQgMCAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwOCA5OC43bDIyLjYgMjIuNiAxMTIgMTEyTDM2NS4zIDI1NmwtMjIuNiAyMi42LTExMiAxMTJMMjA4IDQxMy4zIDE2Mi43IDM2OGwyMi42LTIyLjZMMjQyLjcgMjg4IDMyIDI4OCAwIDI4OGwwLTY0IDMyIDAgMjEwLjcgMC01Ny40LTU3LjRMMTYyLjcgMTQ0IDIwOCA5OC43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 64c106 0 192 86 192 192s-86 192-192 192l0 64c141.4 0 256-114.6 256-256S397.4 0 256 0z" />
            <path d="M208 98.7l22.6 22.6 112 112L365.3 256l-22.6 22.6-112 112L208 413.3 162.7 368l22.6-22.6L242.7 288 32 288 0 288l0-64 32 0 210.7 0-57.4-57.4L162.7 144 208 98.7z" />
    </Icon>
);

export default ArrowRightToArc;