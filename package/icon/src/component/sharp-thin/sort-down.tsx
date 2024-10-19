
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-thin sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzI4LjlMMTYwIDQ1OC41IDMwNCAzMjguOWwwLTI0LjlMMTYgMzA0bDAgMjQuOXpNMTYwIDQ4MEwwIDMzNmwwLTMyIDAtMTYgMTYgMCAyODggMCAxNiAwIDAgMTYgMCAzMkwxNjAgNDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 328.9L160 458.5 304 328.9l0-24.9L16 304l0 24.9zM160 480L0 336l0-32 0-16 16 0 288 0 16 0 0 16 0 32L160 480z" />
    </Icon>
);

export default SortDown;