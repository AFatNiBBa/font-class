
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangles-mixed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangles-mixed?s=sharp-duotone-solid rectangles-mixed}
 * @preview ![rectangles-mixed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMDRsMCAxNzYgMjcyIDAgMC0xNzZMNjQgMzA0ek0zODQgMzJsMCAzNTIgMTkyIDAgMC0zNTJMMzg0IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMkgzMjBWMjU2SDBWMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RectanglesMixed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 304l0 176 272 0 0-176L64 304zM384 32l0 352 192 0 0-352L384 32z" />
            <path d="M0 32H320V256H0V32z" />
    </Icon>
);

export default RectanglesMixed;