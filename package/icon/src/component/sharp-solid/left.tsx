
import { Icon } from "../../index";

/**
 * A component that renders the `left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=sharp-solid left}
 * @preview ![left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTkyIDQ0OGwzMiAwIDAtMTI4IDIyNCAwIDAtMTI4LTIyNCAwIDAtMTI4LTMyIDBMMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 256L192 448l32 0 0-128 224 0 0-128-224 0 0-128-32 0L0 256z" />
    </Icon>
);

export default Left;