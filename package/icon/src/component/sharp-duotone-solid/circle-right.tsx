
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-duotone-solid circle-right}
 * @preview ![circle-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjU2QTI1NiAyNTYgMCAxIDEgMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMHpNMTI4IDIwOGwwIDk2IDEyOCAwIDAgODAgMzIgMEw0MTYgMjU2IDI4OCAxMjhsLTMyIDAgMCA4MC0xMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAzMDRsMCA4MCAzMiAwTDQxNiAyNTYgMjg4IDEyOGwtMzIgMCAwIDgwLTEyOCAwIDAgOTYgMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM128 208l0 96 128 0 0 80 32 0L416 256 288 128l-32 0 0 80-128 0z" />
            <path d="M256 304l0 80 32 0L416 256 288 128l-32 0 0 80-128 0 0 96 128 0z" />
    </Icon>
);

export default CircleRight;