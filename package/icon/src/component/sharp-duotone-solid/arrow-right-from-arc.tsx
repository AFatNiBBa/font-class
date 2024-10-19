
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=sharp-duotone-solid arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEybDMyIDAgMC02NC0zMiAwQzE1MCA0NDggNjQgMzYyIDY0IDI1NlMxNTAgNjQgMjU2IDY0bDMyIDAgMC02NEwyNTYgMEMxMTQuNiAwIDAgMTE0LjYgMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgOTguN2wyMi42IDIyLjYgMTEyIDExMkw1MDkuMyAyNTZsLTIyLjYgMjIuNi0xMTIgMTEyTDM1MiA0MTMuMyAzMDYuNyAzNjhsMjIuNi0yMi42TDM4Ni43IDI4OCAxOTIgMjg4bC0zMiAwIDAtNjQgMzIgMCAxOTQuNyAwLTU3LjQtNTcuNEwzMDYuNyAxNDQgMzUyIDk4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512l32 0 0-64-32 0C150 448 64 362 64 256S150 64 256 64l32 0 0-64L256 0C114.6 0 0 114.6 0 256z" />
            <path d="M352 98.7l22.6 22.6 112 112L509.3 256l-22.6 22.6-112 112L352 413.3 306.7 368l22.6-22.6L386.7 288 192 288l-32 0 0-64 32 0 194.7 0-57.4-57.4L306.7 144 352 98.7z" />
    </Icon>
);

export default ArrowRightFromArc;