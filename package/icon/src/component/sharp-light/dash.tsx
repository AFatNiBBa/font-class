
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=sharp-light dash}
 * @preview ![dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNDBsMTYgMCA0ODAgMCAxNiAwIDAgMzItMTYgMEwxNiAyNzIgMCAyNzJsMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 240l16 0 480 0 16 0 0 32-16 0L16 272 0 272l0-32z" />
    </Icon>
);

export default Dash;