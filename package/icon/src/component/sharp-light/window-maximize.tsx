
import { Icon } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=sharp-light window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgNjRsMCAxMjggNDQ4IDAgMC0xMjhMMzIgNjR6bTAgMTYwbDAgMjI0IDQ0OCAwIDAtMjI0TDMyIDIyNHpNMCAzMmwzMiAwIDQ0OCAwIDMyIDAgMCAzMiAwIDM4NCAwIDMyLTMyIDBMMzIgNDgwIDAgNDgwbDAtMzJMMCA2NCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 128 448 0 0-128L32 64zm0 160l0 224 448 0 0-224L32 224zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default WindowMaximize;