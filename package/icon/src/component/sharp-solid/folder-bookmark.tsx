
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-solid folder-bookmark}
 * @preview ![folder-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDQ4MEwwIDQ4MCAwIDMybDIyNCAwIDQ4IDY0IDI0MCAwIDAgMzg0ek0yODggMTYwbDAgMTkyIDgwLTU2IDgwIDU2IDAtMTkyLTE2MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM288 160l0 192 80-56 80 56 0-192-160 0z" />
    </Icon>
);

export default FolderBookmark;