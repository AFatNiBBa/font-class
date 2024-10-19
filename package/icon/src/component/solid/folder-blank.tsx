
import { Icon } from "../../index";

/**
 * A component that renders the `folder-blank` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-blank?s=solid folder-blank}
 * @preview ![folder-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTQ0VjQzMkM1MTIgNDU4LjUgNDkwLjUgNDgwIDQ2NCA0ODBINDhDMjEuNSA0ODAgMCA0NTguNSAwIDQzMlY4MEMwIDUzLjUgMjEuNSAzMiA0OCAzMkgyMDhMMjcyIDk2SDQ2NEM0OTAuNSA5NiA1MTIgMTE3LjUgNTEyIDE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 144V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V80C0 53.5 21.5 32 48 32H208L272 96H464C490.5 96 512 117.5 512 144Z" />
    </Icon>
);

export default FolderBlank;