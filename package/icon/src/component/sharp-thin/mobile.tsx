
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-thin mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTZsMCA0ODAgMjg4IDAgMC00ODBMNDggMTZ6TTMyIDBMNDggMCAzMzYgMGwxNiAwIDAgMTYgMCA0ODAgMCAxNi0xNiAwTDQ4IDUxMmwtMTYgMCAwLTE2TDMyIDE2IDMyIDB6TTE0NCA0MzJsOTYgMCA4IDAgMCAxNi04IDAtOTYgMC04IDAgMC0xNiA4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 16l0 480 288 0 0-480L48 16zM32 0L48 0 336 0l16 0 0 16 0 480 0 16-16 0L48 512l-16 0 0-16L32 16 32 0zM144 432l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Mobile;