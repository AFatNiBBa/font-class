
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=sharp-duotone-solid circle-caret-right}
 * @preview ![circle-caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjU2QTI1NiAyNTYgMCAxIDEgMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMHpNMjA4IDEyOGwwIDI1NiAzMiAwTDM2OCAyNTYgMjQwIDEyOGwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwOCAxMjhsMzIgMEwzNjggMjU2IDI0MCAzODRsLTMyIDAgMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM208 128l0 256 32 0L368 256 240 128l-32 0z" />
            <path d="M208 128l32 0L368 256 240 384l-32 0 0-256z" />
    </Icon>
);

export default CircleCaretRight;