
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=sharp-thin caret-up}
 * @preview ![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjc5LjFMMTYwIDE0OS41IDMwNCAyNzkuMWwwIDI0LjlMMTYgMzA0bDAtMjQuOXpNMTYwIDEyOEwwIDI3MmwwIDMyIDAgMTYgMTYgMCAyODggMCAxNiAwIDAtMTYgMC0zMkwxNjAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 279.1L160 149.5 304 279.1l0 24.9L16 304l0-24.9zM160 128L0 272l0 32 0 16 16 0 288 0 16 0 0-16 0-32L160 128z" />
    </Icon>
);

export default CaretUp;