
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-regular triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0ODBsMjcuNC00OEwyMjguNCA4MC40IDI1NiAzMmwyNy42IDQ4LjRMNDg0LjYgNDMyIDUxMiA0ODBsLTU1LjMgMEw1NS4zIDQ4MCAwIDQ4MHpNMjU2IDEyOC43TDgyLjcgNDMybDM0Ni42IDBMMjU2IDEyOC43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480l27.4-48L228.4 80.4 256 32l27.6 48.4L484.6 432 512 480l-55.3 0L55.3 480 0 480zM256 128.7L82.7 432l346.6 0L256 128.7z" />
    </Icon>
);

export default Triangle;