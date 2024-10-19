
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=duotone folder-bookmark}
 * @preview ![folder-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2YzAtMzUuMy0yOC43LTY0LTY0LTY0bDAgMjQwYzAgNi4xLTMuNCAxMS42LTguOCAxNC4zcy0xMS45IDIuMS0xNi44LTEuNUwzNjggMzA4bC01NC40IDQwLjhjLTQuOCAzLjYtMTEuMyA0LjItMTYuOCAxLjVzLTguOC04LjItOC44LTE0LjNsMC0yNDBjLTEwLjEgMC0xOS42LTQuNy0yNS42LTEyLjhMMjQzLjIgNTcuNkMyMzEuMSA0MS41IDIxMi4xIDMyIDE5MiAzMkw2NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDk2bDAgMjQwYzAgNi4xIDMuNCAxMS42IDguOCAxNC4zczExLjkgMi4xIDE2LjgtMS41TDM2OCAzMDhsNTQuNCA0MC44YzQuOCAzLjYgMTEuMyA0LjIgMTYuOCAxLjVzOC44LTguMiA4LjgtMTQuM2wwLTI0MEwyODggOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l0 240c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L368 308l-54.4 40.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-240c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96z" />
            <path d="M288 96l0 240c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L368 308l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3l0-240L288 96z" />
    </Icon>
);

export default FolderBookmark;