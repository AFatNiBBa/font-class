
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=sharp-duotone-solid diamond-turn-right}
 * @preview ![diamond-turn-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwyNTYgNTEyIDUxMiAyNTYgMjU2IDAgMCAyNTZ6bTE2MC00MGwyNCAwIDEwNCAwIDAtNzIgMTYgMCA5NiA5Ni05NiA5Ni0xNiAwIDAtNzItODAgMCAwIDY0IDAgMjQtNDggMCAwLTI0IDAtODggMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzMzZsMTYgMCA5Ni05Ni05Ni05Ni0xNiAwIDAgNzItMTA0IDAtMjQgMCAwIDI0IDAgODggMCAyNCA0OCAwIDAtMjQgMC02NCA4MCAwIDAgNzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L256 512 512 256 256 0 0 256zm160-40l24 0 104 0 0-72 16 0 96 96-96 96-16 0 0-72-80 0 0 64 0 24-48 0 0-24 0-88 0-24z" />
            <path d="M288 336l16 0 96-96-96-96-16 0 0 72-104 0-24 0 0 24 0 88 0 24 48 0 0-24 0-64 80 0 0 72z" />
    </Icon>
);

export default DiamondTurnRight;