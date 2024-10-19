
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-grid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-grid?s=sharp-duotone-solid folder-grid}
 * @preview ![folder-grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNODAgMjQwbDk2IDAgMCA5Ni05NiAwIDAtOTZ6bTEyOCAwbDk2IDAgMCA5Ni05NiAwIDAtOTZ6bTEyOCAwbDk2IDAgMCA5Ni05NiAwIDAtOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik04MCAyNDBsOTYgMCAwIDk2LTk2IDAgMC05NnptMTI4IDBsOTYgMCAwIDk2LTk2IDAgMC05NnptMjI0IDBsMCA5Ni05NiAwIDAtOTYgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderGrid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM80 240l96 0 0 96-96 0 0-96zm128 0l96 0 0 96-96 0 0-96zm128 0l96 0 0 96-96 0 0-96z" />
            <path d="M80 240l96 0 0 96-96 0 0-96zm128 0l96 0 0 96-96 0 0-96zm224 0l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default FolderGrid;