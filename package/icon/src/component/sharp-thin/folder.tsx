
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-thin folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDk2TDIyNCAzMiAxNiAzMiAwIDMyIDAgNDggMCA0NjRsMCAxNiAxNiAwIDQ4MCAwIDE2IDAgMC0xNiAwLTM1MiAwLTE2LTE2IDBMMjcyIDk2em0yMjQgMTZsMCAzNTJMMTYgNDY0IDE2IDQ4bDIwMCAwIDQzLjIgNTcuNkwyNjQgMTEybDggMCAyMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96L224 32 16 32 0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L272 96zm224 16l0 352L16 464 16 48l200 0 43.2 57.6L264 112l8 0 224 0z" />
    </Icon>
);

export default Folder;