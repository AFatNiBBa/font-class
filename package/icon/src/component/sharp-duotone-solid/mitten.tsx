
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mitten` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=sharp-duotone-solid mitten}
 * @preview ![mitten](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzODRsMzIgMCAyODggMCAzMiAwIDAgMTI4TDMyIDUxMmwwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMxNi44IDI0My4yTDI4My4yIDEwOC45QzI2Ny4yIDQ0LjkgMjA5LjcgMCAxNDMuOCAwbC0zLjQgMEM2Mi44IDAgMCA2Mi44IDAgMTQwLjNjMCAxMyAxLjggMjYgNS40IDM4LjZMNjQgMzg0bDI4OCAwIDk2LTExMi04MC04MC01MS4yIDUxLjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l32 0 288 0 32 0 0 128L32 512l0-128z" />
            <path d="M316.8 243.2L283.2 108.9C267.2 44.9 209.7 0 143.8 0l-3.4 0C62.8 0 0 62.8 0 140.3c0 13 1.8 26 5.4 38.6L64 384l288 0 96-112-80-80-51.2 51.2z" />
    </Icon>
);

export default Mitten;