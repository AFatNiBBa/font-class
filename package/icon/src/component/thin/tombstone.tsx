
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=thin tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDAwIDQ2NGwwLTI3MmMwLTk3LjItNzguOC0xNzYtMTc2LTE3NlM0OCA5NC44IDQ4IDE5MmwwIDI3Mi0xNiAwIDAtMjcyQzMyIDg2IDExOCAwIDIyNCAwUzQxNiA4NiA0MTYgMTkybDAgMjcyLTE2IDB6TTAgNTA0YzAtNC40IDMuNi04IDgtOGw0MzIgMGM0LjQgMCA4IDMuNiA4IDhzLTMuNiA4LTggOEw4IDUxMmMtNC40IDAtOC0zLjYtOC04ek0yMzIgMTM2bDAgNzIgODAgMGM0LjQgMCA4IDMuNiA4IDhzLTMuNiA4LTggOGwtODAgMCAwIDE1MmMwIDQuNC0zLjYgOC04IDhzLTgtMy42LTgtOGwwLTE1Mi04MCAwYy00LjQgMC04LTMuNi04LThzMy42LTggOC04bDgwIDAgMC03MmMwLTQuNCAzLjYtOCA4LThzOCAzLjYgOCA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 464l0-272c0-97.2-78.8-176-176-176S48 94.8 48 192l0 272-16 0 0-272C32 86 118 0 224 0S416 86 416 192l0 272-16 0zM0 504c0-4.4 3.6-8 8-8l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8zM232 136l0 72 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0 0 152c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-152-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-72c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default Tombstone;