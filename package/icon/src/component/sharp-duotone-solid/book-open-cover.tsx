
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=sharp-duotone-solid book-open-cover}
 * @preview ![book-open-cover](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwTDMwNCAzMmwwIDQxNkw2NCA0MDAgNjQgMjguOCA2NCAwek0zMzYgMzJMNTc2IDBsMCAyOC44TDU3NiA0MDBjLTgwIDE2LTE2MCAzMi0yNDAgNDhsMC00MTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCA0MDBsMjU2IDUxLjJMNTc2IDQwMGwwLTM3MS4yTDY0MCAxNmwwIDQzMkwzMjAgNTEyIDAgNDQ4IDAgMTYgNjQgMjguOCA2NCA0MDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 0L304 32l0 416L64 400 64 28.8 64 0zM336 32L576 0l0 28.8L576 400c-80 16-160 32-240 48l0-416z" />
            <path d="M64 400l256 51.2L576 400l0-371.2L640 16l0 432L320 512 0 448 0 16 64 28.8 64 400z" />
    </Icon>
);

export default BookOpenCover;