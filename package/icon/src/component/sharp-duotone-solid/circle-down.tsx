
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-duotone-solid circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOCAwbDgwIDAgMC0xMjggOTYgMGMwIDQyLjcgMCA4NS4zIDAgMTI4bDgwIDAgMCAzMkwyNTYgNDE2IDEyOCAyODhsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwNCAyNTZsODAgMCAwIDMyTDI1NiA0MTYgMTI4IDI4OGwwLTMyIDgwIDAgMC0xMjggOTYgMCAwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0l80 0 0-128 96 0c0 42.7 0 85.3 0 128l80 0 0 32L256 416 128 288l0-32z" />
            <path d="M304 256l80 0 0 32L256 416 128 288l0-32 80 0 0-128 96 0 0 128z" />
    </Icon>
);

export default CircleDown;