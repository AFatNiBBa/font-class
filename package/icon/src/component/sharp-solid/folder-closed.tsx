
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-solid folder-closed}
 * @preview ![folder-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDQ4MEwwIDQ4MCAwIDE5Mmw1MTIgMCAwIDI4OHptMC0zMjBMMCAxNjAgMCAzMmwyMjQgMCA0OCA2NCAyNDAgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 192l512 0 0 288zm0-320L0 160 0 32l224 0 48 64 240 0 0 64z" />
    </Icon>
);

export default FolderClosed;