
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=solid door-closed}
 * @preview ![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgNjRjMC0zNS4zIDI4LjctNjQgNjQtNjRMNDE2IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzODQgNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMTEyIDAtMjg4IDBMMzIgNTEyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDY0IDBMOTYgNjR6TTM4NCAyODhhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 384 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-112 0-288 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0L96 64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DoorClosed;