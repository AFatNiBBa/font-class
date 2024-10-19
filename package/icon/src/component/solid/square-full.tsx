
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=solid square-full}
 * @preview ![square-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwSDUxMlY1MTJIMFYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0H512V512H0V0z" />
    </Icon>
);

export default SquareFull;