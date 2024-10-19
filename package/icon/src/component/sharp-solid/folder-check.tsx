
import { Icon } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=sharp-solid folder-check}
 * @preview ![folder-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDQ4MEwwIDQ4MCAwIDMybDIyNCAwIDQ4IDY0IDI0MCAwIDAgMzg0ek0yNDEgMzY5TDM4NSAyMjUgMzUxIDE5MWwtMTI3IDEyNy02My02M0wxMjcgMjg5bDgwIDgwIDE3IDE3IDE3LTE3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM241 369L385 225 351 191l-127 127-63-63L127 289l80 80 17 17 17-17z" />
    </Icon>
);

export default FolderCheck;