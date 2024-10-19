
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-thin browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDQ4bDAgNDggMCA0OCAzNjggMCAwLTk2TDEyOCA0OHptLTE2IDBMMTYgNDhsMCA5NiA5NiAwIDAtNDggMC00OHpNMTYgMTYwbDAgMzA0IDQ4MCAwIDAtMzA0LTM3NiAwTDE2IDE2MHpNMCAzMmwxNiAwIDQ4MCAwIDE2IDAgMCAxNiAwIDQxNiAwIDE2LTE2IDBMMTYgNDgwIDAgNDgwbDAtMTZMMCA0OCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 48l0 48 0 48 368 0 0-96L128 48zm-16 0L16 48l0 96 96 0 0-48 0-48zM16 160l0 304 480 0 0-304-376 0L16 160zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default Browser;