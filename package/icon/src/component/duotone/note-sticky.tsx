
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=duotone note-sticky}
 * @preview ![note-sticky](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDIyNCAwIDAtMTI4YzAtMTcuNyAxNC4zLTMyIDMyLTMybDEyOCAwIDAtMjI0YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzUyVjQ4MGg1LjVjMTcgMCAzMy4zLTYuNyA0NS4zLTE4LjdsOTAuNS05MC41YzEyLTEyIDE4LjctMjguMyAxOC43LTQ1LjNWMzIwSDMyMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-128c0-17.7 14.3-32 32-32l128 0 0-224c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
            <path d="M288 352V480h5.5c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3V320H320c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default NoteSticky;