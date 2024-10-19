
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lips` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=sharp-duotone-solid lips}
 * @preview ![lips](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw2NCAwczgwIDk2IDIyNCA5NnMyMjQtOTYgMjI0LTk2bDY0IDBzLTgwIDIyNC0yNDAgMjI0bC05NiAwQzgwIDQ0OCAwIDIyNCAwIDIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiA2NEwwIDIyNGw2NCAwIDE0NC0zMnM0OC4xIDE2IDgwIDE2czgwLTE2IDgwLTE2bDE0NCAzMiA2NCAwTDM4NCA2NGwtOTYgNDhMMTkyIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0s80 96 224 96s224-96 224-96l64 0s-80 224-240 224l-96 0C80 448 0 224 0 224z" />
            <path d="M192 64L0 224l64 0 144-32s48.1 16 80 16s80-16 80-16l144 32 64 0L384 64l-96 48L192 64z" />
    </Icon>
);

export default Lips;