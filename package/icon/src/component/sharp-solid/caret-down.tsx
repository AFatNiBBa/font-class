
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-solid caret-down}
 * @preview ![caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDI0MEwxNjAgMzg0IDAgMjQwbDAtNDggMzIwIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M320 240L160 384 0 240l0-48 320 0 0 48z" />
    </Icon>
);

export default CaretDown;