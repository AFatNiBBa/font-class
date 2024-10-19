
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-thin caret-down}
 * @preview ![caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjMyLjlMMTYwIDM2Mi41IDMwNCAyMzIuOWwwLTI0LjlMMTYgMjA4bDAgMjQuOXpNMTYwIDM4NEwwIDI0MGwwLTMyIDAtMTYgMTYgMCAyODggMCAxNiAwIDAgMTYgMCAzMkwxNjAgMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 232.9L160 362.5 304 232.9l0-24.9L16 208l0 24.9zM160 384L0 240l0-32 0-16 16 0 288 0 16 0 0 16 0 32L160 384z" />
    </Icon>
);

export default CaretDown;