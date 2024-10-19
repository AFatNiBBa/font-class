
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-light horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNDBsMTYgMCA2MDggMCAxNiAwIDAgMzItMTYgMEwxNiAyNzIgMCAyNzJsMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 240l16 0 608 0 16 0 0 32-16 0L16 272 0 272l0-32z" />
    </Icon>
);

export default HorizontalRule;