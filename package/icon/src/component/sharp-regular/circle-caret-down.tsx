
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=sharp-regular circle-caret-down}
 * @preview ![circle-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4YTIwOCAyMDggMCAxIDAgMCA0MTYgMjA4IDIwOCAwIDEgMCAwLTQxNnptMCA0NjRBMjU2IDI1NiAwIDEgMSAyNTYgMGEyNTYgMjU2IDAgMSAxIDAgNTEyek0xMjggMjQwbDAtMzIgMjU2IDAgMCAzMkwyNTYgMzY4IDEyOCAyNDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm0 464A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM128 240l0-32 256 0 0 32L256 368 128 240z" />
    </Icon>
);

export default CircleCaretDown;