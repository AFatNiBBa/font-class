
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=sharp-duotone-solid grip-lines-vertical}
 * @preview ![grip-lines-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzJsNjQgMCAwIDQ0OC02NCAwIDAtNDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMkg2NFY0ODBIMFYzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M128 32l64 0 0 448-64 0 0-448z" />
            <path d="M0 32H64V480H0V32z" />
    </Icon>
);

export default GripLinesVertical;