
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-light barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwzMiAwIDAgNDQ4TDAgNDgwIDAgMzJ6bTY0IDBsMzIgMCAwIDQ0OC0zMiAwTDY0IDMyem05NiAwbDAgNDQ4LTMyIDAgMC00NDggMzIgMHptNjQgMGwzMiAwIDAgNDQ4LTMyIDAgMC00NDh6bTk2IDBsMCA0NDgtMzIgMCAwLTQ0OCAzMiAwem02NCAwbDMyIDAgMCA0NDgtMzIgMCAwLTQ0OHptMTI4IDBsMCA0NDgtMzIgMCAwLTQ0OCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 0 448L0 480 0 32zm64 0l32 0 0 448-32 0L64 32zm96 0l0 448-32 0 0-448 32 0zm64 0l32 0 0 448-32 0 0-448zm96 0l0 448-32 0 0-448 32 0zm64 0l32 0 0 448-32 0 0-448zm128 0l0 448-32 0 0-448 32 0z" />
    </Icon>
);

export default Barcode;