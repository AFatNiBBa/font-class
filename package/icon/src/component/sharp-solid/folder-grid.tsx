
import { Icon } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-solid folder-grid}
 * @preview ![folder-grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDQ4MEwwIDQ4MCAwIDMybDIyNCAwIDQ4IDY0IDI0MCAwIDAgMzg0ek0xNzYgMjQwbC05NiAwIDAgOTYgOTYgMCAwLTk2em0xMjggMGwtOTYgMCAwIDk2IDk2IDAgMC05NnptMzIgMGwwIDk2IDk2IDAgMC05Ni05NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM176 240l-96 0 0 96 96 0 0-96zm128 0l-96 0 0 96 96 0 0-96zm32 0l0 96 96 0 0-96-96 0z" />
    </Icon>
);

export default FolderGrid;