
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=sharp-solid folder-arrow-down}
 * @preview ![folder-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDk2bDAgMzg0TDAgNDgwIDAgMzJsMjI0IDAgNDggNjQgMjQwIDB6TTI4MCAyMDBsMC0yNC00OCAwIDAgMjQgMCAxMDIuMS0zMS0zMS0xNy0xN0wxNTAuMSAyODhsMTcgMTcgNzIgNzIgMTcgMTcgMTctMTcgNzItNzIgMTctMTdMMzI4IDI1NC4xbC0xNyAxNy0zMSAzMUwyODAgMjAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM280 200l0-24-48 0 0 24 0 102.1-31-31-17-17L150.1 288l17 17 72 72 17 17 17-17 72-72 17-17L328 254.1l-17 17-31 31L280 200z" />
    </Icon>
);

export default FolderArrowDown;