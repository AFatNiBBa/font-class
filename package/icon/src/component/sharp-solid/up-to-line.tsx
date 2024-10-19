
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=sharp-solid up-to-line}
 * @preview ![up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjg4TDE5MiAxMjggMzUyIDI4OGwwIDMyLTk2IDAgMCAxNjAtMTI4IDAgMC0xNjAtOTYgMCAwLTMyek0zNTIgOTZMMzIgOTYgMCA5NiAwIDMybDMyIDAgMzIwIDAgMzIgMCAwIDY0LTMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 288L192 128 352 288l0 32-96 0 0 160-128 0 0-160-96 0 0-32zM352 96L32 96 0 96 0 32l32 0 320 0 32 0 0 64-32 0z" />
    </Icon>
);

export default UpToLine;