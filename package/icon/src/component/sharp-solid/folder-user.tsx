
import { Icon } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=sharp-solid folder-user}
 * @preview ![folder-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDk2bDAgMzg0TDAgNDgwIDAgMzJsMjI0IDAgNDggNjQgMjQwIDB6TTMyMCAyNTZhNjQgNjQgMCAxIDAgLTEyOCAwIDY0IDY0IDAgMSAwIDEyOCAwem0xNiA5NmwtMTYwIDAtMjQgNjQgMjA4IDAtMjQtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM320 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-24 64 208 0-24-64z" />
    </Icon>
);

export default FolderUser;