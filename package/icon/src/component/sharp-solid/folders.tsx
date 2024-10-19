
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-solid folders}
 * @preview ![folders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDM4NGwwLTI4OEwzNjggOTYgMzA0IDMyIDk2IDMybDAgMzUyIDQ4MCAwek00OCAxMjBsMC0yNEwwIDk2bDAgMjRMMCA0NTZsMCAyNCAyNCAwIDQzMiAwIDI0IDAgMC00OC0yNCAwTDQ4IDQzMmwwLTMxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 384l0-288L368 96 304 32 96 32l0 352 480 0zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Folders;