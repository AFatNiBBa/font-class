
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-regular barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMzJMMCAzMiAwIDQ4MGw0OCAwTDQ4IDMyem04MCAwTDk2IDMybDAgNDQ4IDMyIDAgMC00NDh6bTgwIDBsLTQ4IDAgMCA0NDggNDggMCAwLTQ0OHptMTEyIDBsLTQ4IDAgMCA0NDggNDggMCAwLTQ0OHptMTQ0IDBsMCA0NDggNDggMCAwLTQ0OC00OCAwem0tNjQgMGwwIDQ0OCAzMiAwIDAtNDQ4LTMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32L0 32 0 480l48 0L48 32zm80 0L96 32l0 448 32 0 0-448zm80 0l-48 0 0 448 48 0 0-448zm112 0l-48 0 0 448 48 0 0-448zm144 0l0 448 48 0 0-448-48 0zm-64 0l0 448 32 0 0-448-32 0z" />
    </Icon>
);

export default Barcode;