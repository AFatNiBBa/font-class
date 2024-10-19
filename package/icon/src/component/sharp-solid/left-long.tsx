
import { Icon } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-solid left-long}
 * @preview ![left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTYwIDk2bDMyIDAgMCA5NiAzMjAgMCAwIDEyOC0zMjAgMCAwIDk2LTMyIDBMMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L160 96l32 0 0 96 320 0 0 128-320 0 0 96-32 0L0 256z" />
    </Icon>
);

export default LeftLong;