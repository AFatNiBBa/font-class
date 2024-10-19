
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-regular bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDM0NC40bDI0LjIgMTQuMUwzMzYgNDI4LjQgMzM2IDQ4IDQ4IDQ4bDAgMzgwLjQgMTE5LjgtNjkuOUwxOTIgMzQ0LjR6TTQ4IDQ4NEwwIDUxMmwwLTU1LjZMMCA0OCAwIDAgNDggMCAzMzYgMGw0OCAwIDAgNDggMCA0MDguNCAwIDU1LjYtNDgtMjhMMTkyIDQwMCA0OCA0ODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 344.4l24.2 14.1L336 428.4 336 48 48 48l0 380.4 119.8-69.9L192 344.4zM48 484L0 512l0-55.6L0 48 0 0 48 0 336 0l48 0 0 48 0 408.4 0 55.6-48-28L192 400 48 484z" />
    </Icon>
);

export default Bookmark;