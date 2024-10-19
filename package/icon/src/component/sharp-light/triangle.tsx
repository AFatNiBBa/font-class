
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-light triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0ODBsMTguMy0zMkwyMzcuNiA2NC4yIDI1NiAzMmwxOC40IDMyLjJMNDkzLjcgNDQ4IDUxMiA0ODBsLTM2LjkgMEwzNi45IDQ4MCAwIDQ4MHpNMjU2IDk2LjVMNTUuMSA0NDhsNDAxLjcgMEwyNTYgOTYuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480l18.3-32L237.6 64.2 256 32l18.4 32.2L493.7 448 512 480l-36.9 0L36.9 480 0 480zM256 96.5L55.1 448l401.7 0L256 96.5z" />
    </Icon>
);

export default Triangle;