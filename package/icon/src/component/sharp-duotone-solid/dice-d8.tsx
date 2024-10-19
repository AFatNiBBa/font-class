
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-duotone-solid dice-d8}
 * @preview ![dice-d8](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0OGwyNDAgODhMMjQwIDAgMCAyNDh6TTI3MiAwbDAgMzM2IDI0MC04OEwyNzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0MCAzNjhMMzIgMjkxLjcgMjQwIDUxMmwwLTE0NHptMzIgMGwwIDE0NEw0ODAgMjkxLjcgMjcyIDM2OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 248l240 88L240 0 0 248zM272 0l0 336 240-88L272 0z" />
            <path d="M240 368L32 291.7 240 512l0-144zm32 0l0 144L480 291.7 272 368z" />
    </Icon>
);

export default DiceD8;