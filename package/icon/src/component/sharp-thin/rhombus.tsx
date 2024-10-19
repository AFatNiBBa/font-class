
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-thin rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjEzLjQgNDk5LjlMMjI0IDUxMmwxMC42LTEyLjFMNDQ4IDI1NiAyMzQuNiAxMi4xIDIyNCAwIDIxMy40IDEyLjEgMCAyNTYgMjEzLjQgNDk5Ljl6TTIyNCA0ODcuN0wyMS4zIDI1NiAyMjQgMjQuMyA0MjYuNyAyNTYgMjI0IDQ4Ny43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M213.4 499.9L224 512l10.6-12.1L448 256 234.6 12.1 224 0 213.4 12.1 0 256 213.4 499.9zM224 487.7L21.3 256 224 24.3 426.7 256 224 487.7z" />
    </Icon>
);

export default Rhombus;