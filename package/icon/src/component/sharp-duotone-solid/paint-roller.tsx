
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=sharp-duotone-solid paint-roller}
 * @preview ![paint-roller](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzIwbDAgMTkyIDEyOCAwIDAtMTkyLTMyIDAgMC0zMiAyMjQgMCAzMiAwIDAtMzIgMC0xNjAgMC0zMi0zMiAwLTY0IDAgMCA2NCAzMiAwIDAgOTYtMjI0IDAtMzIgMCAwIDMyIDAgNjQtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxNiAwTDAgMCAwIDE5Mmw0MTYgMEw0MTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 320l0 192 128 0 0-192-32 0 0-32 224 0 32 0 0-32 0-160 0-32-32 0-64 0 0 64 32 0 0 96-224 0-32 0 0 32 0 64-32 0z" />
            <path d="M416 0L0 0 0 192l416 0L416 0z" />
    </Icon>
);

export default PaintRoller;