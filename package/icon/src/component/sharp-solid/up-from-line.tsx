
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-line?s=sharp-solid up-from-line}
 * @preview ![up-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTkyTDE5MiAzMiAzNTIgMTkybDAgMzItOTYgMCAwIDE2MC0xMjggMCAwLTE2MC05NiAwIDAtMzJ6bTAgMjI0bDMyMCAwIDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTY0IDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 192L192 32 352 192l0 32-96 0 0 160-128 0 0-160-96 0 0-32zm0 224l320 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default UpFromLine;