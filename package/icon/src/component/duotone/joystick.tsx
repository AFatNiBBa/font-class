
import { Icon, generic } from "../../index";

/**
 * A component that renders the `joystick` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=duotone joystick}
 * @preview ![joystick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzNTJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwtNjQgMHpNMTkyIDIxOS40YzUuMSAxLjUgMTAuMyAyLjcgMTUuNiAzLjVjMi43IC40IDUuNCAuNyA4LjEgLjlzNS41IC4zIDguMyAuM2MxMS4xIDAgMjEuOS0xLjYgMzItNC42TDI1NiAzNTJsLTY0IDAgMC0xMzIuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzNiAxMTJhMTEyIDExMiAwIDEgMCAtMjI0IDAgMTEyIDExMiAwIDEgMCAyMjQgMHpNMTc2IDcyYTI0IDI0IDAgMSAxIDQ4IDAgMjQgMjQgMCAxIDEgLTQ4IDB6TTY0IDM1MmMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAzMmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMjAgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Joystick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 352c0-17.7 14.3-32 32-32s32 14.3 32 32l-64 0zM192 219.4c5.1 1.5 10.3 2.7 15.6 3.5c2.7 .4 5.4 .7 8.1 .9s5.5 .3 8.3 .3c11.1 0 21.9-1.6 32-4.6L256 352l-64 0 0-132.6z" />
            <path d="M336 112a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM176 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64L64 352z" />
    </Icon>
);

export default Joystick;