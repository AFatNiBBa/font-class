
import { Icon, generic } from "../../index";

/**
 * A component that renders the `o` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=duotone o}
 * @preview ![o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgOTZhMTYwIDE2MCAwIDEgMCAwIDMyMCAxNjAgMTYwIDAgMSAwIDAtMzIwek00NDggMjU2QTIyNCAyMjQgMCAxIDEgMCAyNTZhMjI0IDIyNCAwIDEgMSA0NDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const O: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z" />
    </Icon>
);

export default O;