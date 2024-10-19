
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=solid rectangle-vertical}
 * @preview ![rectangle-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzODRjMCAzNS4zLTI4LjcgNjQtNjQgNjRINjRjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjRDMCAyOC43IDI4LjcgMCA2NCAwTDMyMCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0z" />
    </Icon>
);

export default RectangleVertical;