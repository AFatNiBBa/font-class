
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=regular window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmwzODQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDY0IDAgNDggMCAxNiAwIDE5MmMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgMjI0bDAtMTYgMC00OEwwIDk2ek00NjQgMjI0TDQ4IDIyNGwwIDE5MmMwIDguOCA3LjIgMTYgMTYgMTZsMzg0IDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMTkyek05NiAxNjBhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0em0xMjgtMzJhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHptNjQgMzJhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64 0 48 0 16 0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 224l0-16 0-48L0 96zM464 224L48 224l0 192c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-192zM96 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Window;