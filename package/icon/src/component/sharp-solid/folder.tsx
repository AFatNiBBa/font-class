
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=sharp-solid folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0ODBINTEyVjk2SDI3MkwyMjQgMzJIMFY0ODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480H512V96H272L224 32H0V480z" />
    </Icon>
);

export default Folder;