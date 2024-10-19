
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-regular folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDk2TDIyNCAzMiA0OCAzMiAwIDMyIDAgODAgMCA0MzJsMCA0OCA0OCAwIDQxNiAwIDQ4IDAgMC00OCAwLTI4OCAwLTQ4LTQ4IDBMMjcyIDk2em0xOTIgNDhsMCAyODhMNDggNDMyIDQ4IDgwbDE1MiAwIDMzLjYgNDQuOEwyNDggMTQ0bDI0IDAgMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96L224 32 48 32 0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0L272 96zm192 48l0 288L48 432 48 80l152 0 33.6 44.8L248 144l24 0 192 0z" />
    </Icon>
);

export default Folder;