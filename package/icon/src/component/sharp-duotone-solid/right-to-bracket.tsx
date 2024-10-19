
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-duotone-solid right-to-bracket}
 * @preview ![right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMzJsMCA2NCAzMiAwIDk2IDAgMCAzMjAtOTYgMC0zMiAwIDAgNjQgMzIgMCAxMjggMCAzMiAwIDAtMzIgMC0zODQgMC0zMi0zMiAwTDM1MiAzMmwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAyNTZMMTkyIDk2bC0zMiAwIDAgOTZMMCAxOTIgMCAzMjBsMTYwIDAgMCA5NiAzMiAwTDM1MiAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 32l0 64 32 0 96 0 0 320-96 0-32 0 0 64 32 0 128 0 32 0 0-32 0-384 0-32-32 0L352 32l-32 0z" />
            <path d="M352 256L192 96l-32 0 0 96L0 192 0 320l160 0 0 96 32 0L352 256z" />
    </Icon>
);

export default RightToBracket;