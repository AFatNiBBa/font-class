
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=duotone window-restore}
 * @preview ![window-restore](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggODBsMCAxNiA2NCAwIDAtMTZjMC04LjggNy4yLTE2IDE2LTE2bDIyNCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDIyNGMwIDguOC03LjIgMTYtMTYgMTZsLTE2IDAgMCA2NCAxNiAwYzQ0LjIgMCA4MC0zNS44IDgwLTgwbDAtMjI0YzAtNDQuMi0zNS44LTgwLTgwLTgwTDIwOCAwYy00NC4yIDAtODAgMzUuOC04MCA4MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDEyOGMtMzUuMyAwLTY0IDI4LjctNjQgNjRMMCA0NDhjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjU2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yNTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMTI4em0zMiA2NGwxOTIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkw5NiAyNTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 80l0 16 64 0 0-16c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-16 0 0 64 16 0c44.2 0 80-35.8 80-80l0-224c0-44.2-35.8-80-80-80L208 0c-44.2 0-80 35.8-80 80z" />
            <path d="M64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 128zm32 64l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default WindowRestore;