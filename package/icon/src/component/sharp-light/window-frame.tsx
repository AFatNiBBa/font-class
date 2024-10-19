
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-light window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQwIDI4OGwwIDE5Mkw2NCA0ODBsMC0xOTIgMTc2IDB6bTMyIDE5MmwwLTE5MiAxNzYgMCAwIDE5Mi0xNzYgMHptMjA4IDBsMC00NDggMC0zMkw0NDggMCA2NCAwIDMyIDBsMCAzMiAwIDQ0OC0xNiAwTDAgNDgwbDAgMzIgMTYgMCAxNiAwIDMyIDAgMzg0IDAgMzIgMCAxNiAwIDE2IDAgMC0zMi0xNiAwLTE2IDB6TTQ0OCAyNTZsLTE3NiAwIDAtMjI0IDE3NiAwIDAgMjI0ek02NCAzMmwxNzYgMCAwIDIyNEw2NCAyNTYgNjQgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 288l0 192L64 480l0-192 176 0zm32 192l0-192 176 0 0 192-176 0zm208 0l0-448 0-32L448 0 64 0 32 0l0 32 0 448-16 0L0 480l0 32 16 0 16 0 32 0 384 0 32 0 16 0 16 0 0-32-16 0-16 0zM448 256l-176 0 0-224 176 0 0 224zM64 32l176 0 0 224L64 256 64 32z" />
    </Icon>
);

export default WindowFrame;