
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-solid caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDk2TDAgMjU2IDE0NCA0MTZsNDggMCAwLTMyMC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 96L0 256 144 416l48 0 0-320-48 0z" />
    </Icon>
);

export default CaretLeft;