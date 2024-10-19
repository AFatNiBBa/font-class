
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=duotone book-copy}
 * @preview ![book-copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDQxNmMwIDUzIDQzIDk2IDk2IDk2bDIyNCAwIDMyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTMyIDAtNDggMEw5NiA0NDhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsNzQuOCAwYy02LjktMTQuNS0xMC44LTMwLjgtMTAuOC00OGwwLTI0MEw5NiA5NkM0MyA5NiAwIDEzOSAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAwYy01MyAwLTk2IDQzLTk2IDk2bDAgMjI0YzAgNTMgNDMgOTYgOTYgOTZsMjI0IDAgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwwLTY0YzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMjI0YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDUxMiAwIDI4OCAwem0wIDI4OGwxOTIgMCAwIDY0LTE5MiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 416c0 53 43 96 96 96l224 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0-48 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l74.8 0c-6.9-14.5-10.8-30.8-10.8-48l0-240L96 96C43 96 0 139 0 192z" />
            <path d="M288 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l224 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L512 0 288 0zm0 288l192 0 0 64-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default BookCopy;