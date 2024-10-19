
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train?s=sharp-duotone-solid train}
 * @preview ![train](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjggNTEybDkwLjUgMCA2NC02NC05MC41IDBMMjUuNCA0ODkuNCAyLjggNTEyek02NCA2NGwwIDE2MCAzMjAgMCAwLTE2MEw2NCA2NHpNMjkwLjcgNDQ4bDY0IDY0IDkwLjUgMC0yMi42LTIyLjZMMzgxLjMgNDQ4bC05MC41IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDBMNDQ4IDBsMCA0NDhMMCA0NDggMCAwek02NCA2NGwwIDE2MCAzMjAgMCAwLTE2MEw2NCA2NHpNMjI0IDM4NGE0OCA0OCAwIDEgMCAwLTk2IDQ4IDQ4IDAgMSAwIDAgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Train: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.8 512l90.5 0 64-64-90.5 0L25.4 489.4 2.8 512zM64 64l0 160 320 0 0-160L64 64zM290.7 448l64 64 90.5 0-22.6-22.6L381.3 448l-90.5 0z" />
            <path d="M0 0L448 0l0 448L0 448 0 0zM64 64l0 160 320 0 0-160L64 64zM224 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Train;