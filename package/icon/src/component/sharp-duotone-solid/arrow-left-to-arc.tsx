
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=sharp-duotone-solid arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEybDAtNjRDMTUwIDQ0OCA2NCAzNjIgNjQgMjU2UzE1MCA2NCAyNTYgNjRsMC02NEMxMTQuNiAwIDAgMTE0LjYgMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgOTguN2wtMjIuNiAyMi42LTExMiAxMTJMMTQ2LjcgMjU2bDIyLjYgMjIuNiAxMTIgMTEyTDMwNCA0MTMuMyAzNDkuMyAzNjhsLTIyLjYtMjIuNkwyNjkuMyAyODggNDgwIDI4OGwzMiAwIDAtNjQtMzIgMC0yMTAuNyAwIDU3LjQtNTcuNEwzNDkuMyAxNDQgMzA0IDk4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512l0-64C150 448 64 362 64 256S150 64 256 64l0-64C114.6 0 0 114.6 0 256z" />
            <path d="M304 98.7l-22.6 22.6-112 112L146.7 256l22.6 22.6 112 112L304 413.3 349.3 368l-22.6-22.6L269.3 288 480 288l32 0 0-64-32 0-210.7 0 57.4-57.4L349.3 144 304 98.7z" />
    </Icon>
);

export default ArrowLeftToArc;