
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-regular info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMybDAgODAtODAgMCAwLTgwIDgwIDB6TTE2IDE3NmwyNCAwIDU2IDAgMjQgMCAwIDI0IDAgMjY0IDQ4IDAgMjQgMCAwIDQ4LTI0IDBMMjQgNTEyIDAgNTEybDAtNDggMjQgMCA0OCAwIDAtMjQwLTMyIDAtMjQgMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 32l0 80-80 0 0-80 80 0zM16 176l24 0 56 0 24 0 0 24 0 264 48 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0 48 0 0-240-32 0-24 0 0-48z" />
    </Icon>
);

export default Info;