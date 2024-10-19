
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-tree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-tree?s=duotone folder-tree}
 * @preview ![folder-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDAgOTZMMCAzODRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjI0IDAgMC02NEw2NCAzODRsMC0yMjQgMjI0IDAgMC02NEw2NCA5NmwwLTY0QzY0IDE0LjMgNDkuNyAwIDMyIDBTMCAxNC4zIDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzJsMCAxNjBjMCAxNy43IDE0LjMgMzIgMzIgMzJsMjI0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJsLTk4LjcgMGMtOC41IDAtMTYuNi0zLjQtMjIuNi05LjRMNDA5LjQgOS40Yy02LTYtMTQuMS05LjQtMjIuNi05LjRMMzIwIDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyem0wIDI4OGwwIDE2MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwyMjQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTEyOGMwLTE3LjctMTQuMy0zMi0zMi0zMmwtOTguNyAwYy04LjUgMC0xNi42LTMuNC0yMi42LTkuNGwtMTMuMy0xMy4zYy02LTYtMTQuMS05LjQtMjIuNi05LjRMMzIwIDI4OGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderTree: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l0 96L0 384c0 35.3 28.7 64 64 64l224 0 0-64L64 384l0-224 224 0 0-64L64 96l0-64C64 14.3 49.7 0 32 0S0 14.3 0 32z" />
            <path d="M288 32l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-98.7 0c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4L320 0c-17.7 0-32 14.3-32 32zm0 288l0 160c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-98.7 0c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4L320 288c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default FolderTree;