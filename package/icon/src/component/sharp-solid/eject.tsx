
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=sharp-solid eject}
 * @preview ![eject](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMjBsMC00OEwyMjQgMzIgNDQ4IDI3MmwwIDQ4TDAgMzIwek00NDggNDgwTDAgNDgwbDAtOTYgNDQ4IDAgMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 320l0-48L224 32 448 272l0 48L0 320zM448 480L0 480l0-96 448 0 0 96z" />
    </Icon>
);

export default Eject;