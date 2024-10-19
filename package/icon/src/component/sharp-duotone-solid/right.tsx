
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-duotone-solid right}
 * @preview ![right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDMyMGwyMjQgMCAwLTEyOEwwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA0NDhsMzIgMEw0NDggMjU2IDI1NiA2NGwtMzIgMCAwIDEyOCAwIDEyOCAwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l224 0 0-128L0 192z" />
            <path d="M224 448l32 0L448 256 256 64l-32 0 0 128 0 128 0 128z" />
    </Icon>
);

export default Right;