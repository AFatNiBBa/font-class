
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=sharp-duotone-solid folder-tree}
 * @preview ![folder-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMmwwIDk2TDAgNDE2bDAgMzIgMzIgMCAyNTYgMCAwLTY0TDY0IDM4NGwwLTIyNCAyMjQgMCAwLTY0TDY0IDk2bDAtNjRMNjQgMCAwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMGwwIDIyNCAyODggMCAwLTE5Mkw0MzIgMzIgNDAwIDAgMjg4IDB6bTAgMjg4bDAgMjI0IDI4OCAwIDAtMTkyLTE0NCAwLTMyLTMyLTExMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32l0 96L0 416l0 32 32 0 256 0 0-64L64 384l0-224 224 0 0-64L64 96l0-64L64 0 0 0z" />
            <path d="M288 0l0 224 288 0 0-192L432 32 400 0 288 0zm0 288l0 224 288 0 0-192-144 0-32-32-112 0z" />
    </Icon>
);

export default FolderTree;