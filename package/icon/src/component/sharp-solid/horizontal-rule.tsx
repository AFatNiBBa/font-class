
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-solid horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMjRsMzIgMCA1NzYgMCAzMiAwIDAgNjQtMzIgMEwzMiAyODggMCAyODhsMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 224l32 0 576 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
    </Icon>
);

export default HorizontalRule;