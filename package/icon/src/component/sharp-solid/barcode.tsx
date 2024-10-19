
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-solid barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJMMCAzMiAwIDQ4MGw2NCAwTDY0IDMyem02NCAwTDk2IDMybDAgNDQ4IDMyIDAgMC00NDh6bTk2IDBsLTY0IDAgMCA0NDggNjQgMCAwLTQ0OHptOTYgMGwtNjQgMCAwIDQ0OCA2NCAwIDAtNDQ4em0xMjggMGwwIDQ0OCA2NCAwIDAtNDQ4LTY0IDB6bS02NCAwbDAgNDQ4IDMyIDAgMC00NDgtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32L0 32 0 480l64 0L64 32zm64 0L96 32l0 448 32 0 0-448zm96 0l-64 0 0 448 64 0 0-448zm96 0l-64 0 0 448 64 0 0-448zm128 0l0 448 64 0 0-448-64 0zm-64 0l0 448 32 0 0-448-32 0z" />
    </Icon>
);

export default Barcode;