
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=sharp-duotone-solid arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2bC02NCAwYzAgMTA2LTg2IDE5Mi0xOTIgMTkyUzY0IDM2MiA2NCAyNTZMMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTMuMyAyMDhsLTIyLjYgMjIuNi0xMTIgMTEyTDI1NiAzNjUuM2wtMjIuNi0yMi42LTExMi0xMTJMOTguNyAyMDggMTQ0IDE2Mi43bDIyLjYgMjIuNkwyMjQgMjQyLjcgMjI0IDMybDAtMzIgNjQgMCAwIDMyIDAgMjEwLjcgNTcuNC01Ny40TDM2OCAxNjIuNyA0MTMuMyAyMDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256l-64 0c0 106-86 192-192 192S64 362 64 256L0 256z" />
            <path d="M413.3 208l-22.6 22.6-112 112L256 365.3l-22.6-22.6-112-112L98.7 208 144 162.7l22.6 22.6L224 242.7 224 32l0-32 64 0 0 32 0 210.7 57.4-57.4L368 162.7 413.3 208z" />
    </Icon>
);

export default ArrowDownToArc;