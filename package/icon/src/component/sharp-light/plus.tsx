
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-light plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQwIDY0bDAtMTYtMzIgMCAwIDE2IDAgMTc2TDMyIDI0MGwtMTYgMCAwIDMyIDE2IDAgMTc2IDAgMCAxNzYgMCAxNiAzMiAwIDAtMTYgMC0xNzYgMTc2IDAgMTYgMCAwLTMyLTE2IDAtMTc2IDAgMC0xNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 64l0-16-32 0 0 16 0 176L32 240l-16 0 0 32 16 0 176 0 0 176 0 16 32 0 0-16 0-176 176 0 16 0 0-32-16 0-176 0 0-176z" />
    </Icon>
);

export default Plus;