
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-light text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwxNiAwIDQxNiAwIDE2IDAgMCAxNiAwIDY0IDAgMTYtMzIgMCAwLTE2IDAtNDhMMjQwIDY0bDAgMzg0IDY0IDAgMTYgMCAwIDMyLTE2IDAtMTYwIDAtMTYgMCAwLTMyIDE2IDAgNjQgMCAwLTM4NEwzMiA2NGwwIDQ4IDAgMTZMMCAxMjhsMC0xNkwwIDQ4IDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l16 0 416 0 16 0 0 16 0 64 0 16-32 0 0-16 0-48L240 64l0 384 64 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0 64 0 0-384L32 64l0 48 0 16L0 128l0-16L0 48 0 32z" />
    </Icon>
);

export default Text;