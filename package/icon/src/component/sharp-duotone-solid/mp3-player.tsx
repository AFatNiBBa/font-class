
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=sharp-duotone-solid mp3-player}
 * @preview ![mp3-player](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzg0IDBsMCA1MTJMMCA1MTIgMCAwek02NCA2NGwwIDEyOCAyNTYgMCAwLTEyOEw2NCA2NHpNOTYgMzUyYTk2IDk2IDAgMSAwIDE5MiAwQTk2IDk2IDAgMSAwIDk2IDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCA2NGwwIDEyOEw2NCAxOTIgNjQgNjRsMjU2IDB6TTIyNCAzNTJhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHpNOTYgMzUyYTk2IDk2IDAgMSAxIDE5MiAwQTk2IDk2IDAgMSAxIDk2IDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512L0 512 0 0zM64 64l0 128 256 0 0-128L64 64zM96 352a96 96 0 1 0 192 0A96 96 0 1 0 96 352z" />
            <path d="M320 64l0 128L64 192 64 64l256 0zM224 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 352a96 96 0 1 1 192 0A96 96 0 1 1 96 352z" />
    </Icon>
);

export default Mp3Player;