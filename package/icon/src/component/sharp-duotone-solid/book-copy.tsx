
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=sharp-duotone-solid book-copy}
 * @preview ![book-copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDQxNmMwIDUzIDQzIDk2IDk2IDk2bDIyNCAwIDMyIDAgMzIgMCAwLTY0LTMyIDAtMzIgMC0zMiAwTDk2IDQ0OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmw4MS4xIDBjLTEwLjktMTguOC0xNy4xLTQwLjctMTcuMS02NGwwLTIyNEw5NiA5NkM0MyA5NiAwIDEzOSAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAwYy01MyAwLTk2IDQzLTk2IDk2bDAgMjI0YzAgNTMgNDMgOTYgOTYgOTZsMjI0IDAgMzIgMCAzMiAwIDAtNjQtMzIgMCAwLTY0IDMyIDBMNTc2IDAgNTQ0IDAgNTEyIDAgMjg4IDB6bTAgMjg4bDE5MiAwIDAgNjQtMTkyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 416c0 53 43 96 96 96l224 0 32 0 32 0 0-64-32 0-32 0-32 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.1 0c-10.9-18.8-17.1-40.7-17.1-64l0-224L96 96C43 96 0 139 0 192z" />
            <path d="M288 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l224 0 32 0 32 0 0-64-32 0 0-64 32 0L576 0 544 0 512 0 288 0zm0 288l192 0 0 64-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BookCopy;