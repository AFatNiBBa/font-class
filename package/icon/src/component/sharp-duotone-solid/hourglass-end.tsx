
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-end` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-end?s=sharp-duotone-solid hourglass-end}
 * @preview ![hourglass-end](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGw2NCAwIDAgNTAuNyA5NiA5NiA5Ni05NkwyODggNjRsNjQgMCAwIDY0IDAgMTMuMy05LjQgOS40TDIzNy4zIDI1NiAzNDIuNiAzNjEuNGw5LjQgOS40IDAgMTMuMyAwIDY0Yy0yMS4zIDAtNDIuNyAwLTY0IDBjLTY0IDAtMTI4IDAtMTkyIDBsLTY0IDAgMC02NCAwLTEzLjMgOS40LTkuNEwxNDYuNyAyNTYgNDEuNCAxNTAuNiAzMiAxNDEuMyAzMiAxMjhsMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDBMMCAwIDAgNjRsMzIgMCAzMjAgMCAzMiAwIDAtNjRMMzUyIDAgMzIgMHptMCA0NDhMMCA0NDhsMCA2NCAzMiAwIDMyMCAwIDMyIDAgMC02NC0zMiAwTDMyIDQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HourglassEnd: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l64 0 0 50.7 96 96 96-96L288 64l64 0 0 64 0 13.3-9.4 9.4L237.3 256 342.6 361.4l9.4 9.4 0 13.3 0 64c-21.3 0-42.7 0-64 0c-64 0-128 0-192 0l-64 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64z" />
            <path d="M32 0L0 0 0 64l32 0 320 0 32 0 0-64L352 0 32 0zm0 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default HourglassEnd;