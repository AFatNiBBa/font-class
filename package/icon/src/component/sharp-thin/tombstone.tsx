
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-thin tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDAwIDQ2NGwwLTI3MmMwLTk3LjItNzguOC0xNzYtMTc2LTE3NlM0OCA5NC44IDQ4IDE5MmwwIDI3Mi0xNiAwIDAtMjcyQzMyIDg2IDExOCAwIDIyNCAwUzQxNiA4NiA0MTYgMTkybDAgMjcyLTE2IDB6TTAgNDk2bDggMCA0MzIgMCA4IDAgMCAxNi04IDBMOCA1MTJsLTggMCAwLTE2ek0yMzIgMTM2bDAgNzIgODAgMCA4IDAgMCAxNi04IDAtODAgMCAwIDE1MiAwIDgtMTYgMCAwLTggMC0xNTItODAgMC04IDAgMC0xNiA4IDAgODAgMCAwLTcyIDAtOCAxNiAwIDAgOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 464l0-272c0-97.2-78.8-176-176-176S48 94.8 48 192l0 272-16 0 0-272C32 86 118 0 224 0S416 86 416 192l0 272-16 0zM0 496l8 0 432 0 8 0 0 16-8 0L8 512l-8 0 0-16zM232 136l0 72 80 0 8 0 0 16-8 0-80 0 0 152 0 8-16 0 0-8 0-152-80 0-8 0 0-16 8 0 80 0 0-72 0-8 16 0 0 8z" />
    </Icon>
);

export default Tombstone;