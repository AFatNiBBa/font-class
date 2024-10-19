
import { Icon } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-regular file-vector}
 * @preview ![file-vector](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDY0TDQ4IDQ4bDE3NiAwIDAgMTEyIDExMiAwIDAgMzA0TDQ4IDQ2NHpNMjU2IDBMNDggMCAwIDAgMCA0OCAwIDQ2NGwwIDQ4IDQ4IDAgMjg4IDAgNDggMCAwLTQ4IDAtMzM2TDI1NiAwek0yNDAgMjI0bC05NiAwIDAtMTYtNjQgMCAwIDY0IDE2IDAgMCA5Ni0xNiAwIDAgNjQgNjQgMCAwLTE2IDk2IDAgMCAxNiA2NCAwIDAtNjQtMTYgMCAwLTk2IDE2IDAgMC02NC02NCAwIDAgMTZ6bTAgMTQ0bC05NiAwIDAtOTYgOTYgMCAwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM240 224l-96 0 0-16-64 0 0 64 16 0 0 96-16 0 0 64 64 0 0-16 96 0 0 16 64 0 0-64-16 0 0-96 16 0 0-64-64 0 0 16zm0 144l-96 0 0-96 96 0 0 96z" />
    </Icon>
);

export default FileVector;