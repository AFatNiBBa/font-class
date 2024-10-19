
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-bracket?s=sharp-duotone-solid arrow-right-to-bracket}
 * @preview ![arrow-right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMzJsMCA2NCAzMiAwIDk2IDAgMCAzMjAtOTYgMC0zMiAwIDAgNjQgMzIgMCAxMjggMCAzMiAwIDAtMzIgMC0zODQgMC0zMi0zMiAwTDM1MiAzMmwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2NS4zIDI1NmwtMjIuNiAyMi42LTEyOCAxMjhMMTkyIDQyOS4zIDE0Ni43IDM4NGwyMi42LTIyLjZMMjQyLjcgMjg4IDMyIDI4OCAwIDI4OGwwLTY0IDMyIDAgMjEwLjcgMC03My40LTczLjRMMTQ2LjcgMTI4IDE5MiA4Mi43bDIyLjYgMjIuNiAxMjggMTI4TDM2NS4zIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowRightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 32l0 64 32 0 96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0z" />
            <path d="M365.3 256l-22.6 22.6-128 128L192 429.3 146.7 384l22.6-22.6L242.7 288 32 288 0 288l0-64 32 0 210.7 0-73.4-73.4L146.7 128 192 82.7l22.6 22.6 128 128L365.3 256z" />
    </Icon>
);

export default ArrowRightToBracket;