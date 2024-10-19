
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=sharp-duotone-solid book-open}
 * @preview ![book-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggNzJjMTYtMTYgODAtNDAgMTQ0LTQwczEyMi43IDIxLjMgMTQ0IDMybDAgNDE2Yy0yMS4zLTEwLjctOTIuOC0zMi0xNDQtMzJzLTE0NCAzMi0xNDQgMzJsMC00MDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggNzJWNDgwcy05Mi44LTMyLTE0NC0zMlMyMS4zIDQ2OS4zIDAgNDgwVjY0QzIxLjMgNTMuMyA4MCAzMiAxNDQgMzJzMTI4IDI0IDE0NCA0MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 72c16-16 80-40 144-40s122.7 21.3 144 32l0 416c-21.3-10.7-92.8-32-144-32s-144 32-144 32l0-408z" />
            <path d="M288 72V480s-92.8-32-144-32S21.3 469.3 0 480V64C21.3 53.3 80 32 144 32s128 24 144 40z" />
    </Icon>
);

export default BookOpen;