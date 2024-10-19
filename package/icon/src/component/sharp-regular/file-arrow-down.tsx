
import { Icon } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-regular file-arrow-down}
 * @preview ![file-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDhsMTc2IDAgMCAxMTIgMTEyIDAgMCAzMDRMNDggNDY0IDQ4IDQ4ek0yNTYgMEw0OCAwIDAgMCAwIDQ4IDAgNDY0bDAgNDggNDggMCAyODggMCA0OCAwIDAtNDggMC0zMzZMMjU2IDB6TTIxNiAyMzJsMC0yNC00OCAwIDAgMjQgMCAxMDIuMS0zMS0zMS0xNy0xN0w4Ni4xIDMyMGwxNyAxNyA3MiA3MiAxNyAxNyAxNy0xNyA3Mi03MiAxNy0xN0wyNjQgMjg2LjFsLTE3IDE3LTMxIDMxTDIxNiAyMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM216 232l0-24-48 0 0 24 0 102.1-31-31-17-17L86.1 320l17 17 72 72 17 17 17-17 72-72 17-17L264 286.1l-17 17-31 31L216 232z" />
    </Icon>
);

export default FileArrowDown;