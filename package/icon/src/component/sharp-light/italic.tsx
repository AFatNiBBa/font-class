
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=sharp-light italic}
 * @preview ![italic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMybDE2IDAgMjI0IDAgMTYgMCAwIDMyLTE2IDAtODUgMEwxMzUuMyA0NDggMjQwIDQ0OGwxNiAwIDAgMzItMTYgMEwxNiA0ODAgMCA0ODBsMC0zMiAxNiAwIDg1IDBMMjQ4LjcgNjQgMTQ0IDY0bC0xNiAwIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l16 0 224 0 16 0 0 32-16 0-85 0L135.3 448 240 448l16 0 0 32-16 0L16 480 0 480l0-32 16 0 85 0L248.7 64 144 64l-16 0 0-32z" />
    </Icon>
);

export default Italic;