
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-solid caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDk2TDI1NiAyNTYgMTEyIDQxNmwtNDggMEw2NCA5Nmw0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M112 96L256 256 112 416l-48 0L64 96l48 0z" />
    </Icon>
);

export default CaretRight;