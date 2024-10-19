
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=sharp-duotone-solid diagram-cells}
 * @preview ![diagram-cells](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ4MGw1MTIgMCAwLTE5MkwwIDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAyMjRWMzJMMCAzMiAwIDIyNGw1MTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192L0 288z" />
            <path d="M512 224V32L0 32 0 224l512 0z" />
    </Icon>
);

export default DiagramCells;