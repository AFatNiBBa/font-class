
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-light folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDk2TDIyNCAzMiAzMiAzMiAwIDMyIDAgNjQgMCA0NDhsMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC0zMiAwLTMyMCAwLTMyLTMyIDBMMjcyIDk2em0yMDggMzJsMCAzMjBMMzIgNDQ4IDMyIDY0bDE3NiAwIDM4LjQgNTEuMkwyNTYgMTI4bDE2IDAgMjA4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96L224 32 32 32 0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0L272 96zm208 32l0 320L32 448 32 64l176 0 38.4 51.2L256 128l16 0 208 0z" />
    </Icon>
);

export default Folder;