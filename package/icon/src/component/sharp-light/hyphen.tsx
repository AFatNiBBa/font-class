
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=sharp-light hyphen}
 * @preview ![hyphen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNDBsMTYgMCAyODggMCAxNiAwIDAgMzItMTYgMEwxNiAyNzIgMCAyNzJsMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 240l16 0 288 0 16 0 0 32-16 0L16 272 0 272l0-32z" />
    </Icon>
);

export default Hyphen;