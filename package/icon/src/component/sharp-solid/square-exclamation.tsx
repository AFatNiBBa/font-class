
import { Icon } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=sharp-solid square-exclamation}
 * @preview ![square-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTI0OCAxMjhsMCAyNCAwIDExMiAwIDI0LTQ4IDAgMC0yNCAwLTExMiAwLTI0IDQ4IDB6TTIwMCAzMjBsNDggMCAwIDQ4LTQ4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM248 128l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM200 320l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default SquareExclamation;