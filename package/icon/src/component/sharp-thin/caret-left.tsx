
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-thin caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUxLjEgNDAwTDIxLjUgMjU2IDE1MS4xIDExMmwyNC45IDAgMCAyODgtMjQuOSAwek0wIDI1NkwxNDQgNDE2bDMyIDAgMTYgMCAwLTE2IDAtMjg4IDAtMTYtMTYgMC0zMiAwTDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M151.1 400L21.5 256 151.1 112l24.9 0 0 288-24.9 0zM0 256L144 416l32 0 16 0 0-16 0-288 0-16-16 0-32 0L0 256z" />
    </Icon>
);

export default CaretLeft;