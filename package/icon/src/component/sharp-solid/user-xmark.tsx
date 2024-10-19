
import { Icon } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-solid user-xmark}
 * @preview ![user-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDBBMTI4IDEyOCAwIDEgMSA5NiAxMjh6TTM4NCAzMDRsNjQgMjA4TDAgNTEyIDY0IDMwNGwzMjAgMHpNNjMzLjkgMTYwbC0xNyAxNy00NyA0NyA0NyA0NyAxNyAxN0w2MDAgMzIxLjlsLTE3LTE3LTQ3LTQ3LTQ3IDQ3LTE3IDE3TDQzOC4xIDI4OGwxNy0xNyA0Ny00Ny00Ny00Ny0xNy0xN0w0NzIgMTI2LjFsMTcgMTcgNDcgNDcgNDctNDcgMTctMTdMNjMzLjkgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM384 304l64 208L0 512 64 304l320 0zM633.9 160l-17 17-47 47 47 47 17 17L600 321.9l-17-17-47-47-47 47-17 17L438.1 288l17-17 47-47-47-47-17-17L472 126.1l17 17 47 47 47-47 17-17L633.9 160z" />
    </Icon>
);

export default UserXmark;