
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=light text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDQ4YzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtNDhMMjQwIDY0bDAgMzg0IDY0IDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZsLTE2MCAwYy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2bDY0IDAgMC0zODRMMzIgNjRsMCA0OGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNkwwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L240 64l0 384 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-384L32 64l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 64z" />
    </Icon>
);

export default Text;