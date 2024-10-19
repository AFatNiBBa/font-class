
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=duotone folder-closed}
 * @preview ![folder-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgOTYgNTEyIDAgMC0zMmMwLTM1LjMtMjguNy02NC02NC02NEwyODggOTZjLTEwLjEgMC0xOS42LTQuNy0yNS42LTEyLjhMMjQzLjIgNTcuNkMyMzEuMSA0MS41IDIxMi4xIDMyIDE5MiAzMkw2NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yMjRMMCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 96 512 0 0-32c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96z" />
            <path d="M0 192L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224L0 192z" />
    </Icon>
);

export default FolderClosed;