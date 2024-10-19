
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-regular horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMzJsMjQgMCA1OTIgMCAyNCAwIDAgNDgtMjQgMEwyNCAyODAgMCAyODBsMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 232l24 0 592 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
    </Icon>
);

export default HorizontalRule;