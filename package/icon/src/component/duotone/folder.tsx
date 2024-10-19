
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=duotone folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0ODBINDQ4YzM1LjMgMCA2NC0yOC43IDY0LTY0VjE2MGMwLTM1LjMtMjguNy02NC02NC02NEgyODhjLTEwLjEgMC0xOS42LTQuNy0yNS42LTEyLjhMMjQzLjIgNTcuNkMyMzEuMSA0MS41IDIxMi4xIDMyIDE5MiAzMkg2NEMyOC43IDMyIDAgNjAuNyAwIDk2VjQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Folder;