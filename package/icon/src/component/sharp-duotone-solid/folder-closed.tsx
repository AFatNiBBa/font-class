
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-duotone-solid folder-closed}
 * @preview ![folder-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgMTkybDUxMiAwIDAtOTZMMjcyIDk2IDIyNCAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJMMCA0ODBsNTEyIDAgMC0yODhMMCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 192l512 0 0-96L272 96 224 32 0 32z" />
            <path d="M0 192L0 480l512 0 0-288L0 192z" />
    </Icon>
);

export default FolderClosed;