
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=thin minus}
 * @preview ![minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDI0IDI1NmMwIDQuNC0zLjYgOC04IDhMMzIgMjY0Yy00LjQgMC04LTMuNi04LThzMy42LTggOC04bDM4NCAwYzQuNCAwIDggMy42IDggOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M424 256c0 4.4-3.6 8-8 8L32 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l384 0c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default Minus;