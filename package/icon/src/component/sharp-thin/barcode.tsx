
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-thin barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwxNiAwIDAgNDQ4TDAgNDgwIDAgMzJ6bTI1NiAwbDE2IDAgMCA0NDgtMTYgMCAwLTQ0OHptMTQ0IDBsMCA0NDgtMTYgMCAwLTQ0OCAxNiAwem0tOTYgMGwxNiAwIDAgNDQ4LTE2IDAgMC00NDh6TTY0IDMybDAgNDQ4LTE2IDBMNDggMzJsMTYgMHptMzg0IDBsMTYgMCAwIDQ0OC0xNiAwIDAtNDQ4em02NCAwbDAgNDQ4LTE2IDAgMC00NDggMTYgMHpNMTEyIDMybDE2IDAgMCA0NDgtMTYgMCAwLTQ0OHptODggMGwwIDQ0OC0xNiAwIDAtNDQ4IDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 0 448L0 480 0 32zm256 0l16 0 0 448-16 0 0-448zm144 0l0 448-16 0 0-448 16 0zm-96 0l16 0 0 448-16 0 0-448zM64 32l0 448-16 0L48 32l16 0zm384 0l16 0 0 448-16 0 0-448zm64 0l0 448-16 0 0-448 16 0zM112 32l16 0 0 448-16 0 0-448zm88 0l0 448-16 0 0-448 16 0z" />
    </Icon>
);

export default Barcode;