
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-thin triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0ODBsOS4xLTE2TDI0Ni44IDQ4LjEgMjU2IDMybDkuMiAxNi4xTDUwMi45IDQ2NGw5LjEgMTYtMTguNCAwTDE4LjQgNDgwIDAgNDgwek0yNTYgNjQuMkwyNy42IDQ2NGw0NTYuOSAwTDI1NiA2NC4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480l9.1-16L246.8 48.1 256 32l9.2 16.1L502.9 464l9.1 16-18.4 0L18.4 480 0 480zM256 64.2L27.6 464l456.9 0L256 64.2z" />
    </Icon>
);

export default Triangle;