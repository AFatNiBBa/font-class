
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=solid message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCAzNTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsOTYgMCAwIDgwYzAgNi4xIDMuNCAxMS42IDguOCAxNC4zczExLjkgMi4xIDE2LjgtMS41TDMwOS4zIDQxNiA0NDggNDE2YzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjg4YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default Message;