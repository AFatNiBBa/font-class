
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=duotone note}
 * @preview ![note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDMyMCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjI0LTEyOCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDEyOEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6bTY0IDMyYTI0IDI0IDAgMSAwIDQ4IDAgMjQgMjQgMCAxIDAgLTQ4IDB6bTAgMTI4YTI0IDI0IDAgMSAwIDQ4IDAgMjQgMjQgMCAxIDAgLTQ4IDB6bTAgMTI4YTI0IDI0IDAgMSAwIDQ4IDAgMjQgMjQgMCAxIDAgLTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzUyVjQ4MGg1LjVjMTcgMCAzMy4zLTYuNyA0NS4zLTE4LjdsOTAuNS05MC41YzEyLTEyIDE4LjctMjguMyAxOC43LTQ1LjNWMzIwSDMyMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224-128 0c-17.7 0-32 14.3-32 32l0 128L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 128a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            <path d="M288 352V480h5.5c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3V320H320c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Note;