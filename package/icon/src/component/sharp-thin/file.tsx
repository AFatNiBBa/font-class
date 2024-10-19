
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-thin file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDQ5NmwwLTMyMC0xNTIgMC04IDAgMC04IDAtMTUyTDE2IDE2bDAgNDgwIDM1MiAwem0tNi42LTMzNkwyMjQgMjIuNiAyMjQgMTYwbDEzNy40IDB6TTE2IDBMMjI0IDAgMzg0IDE2MGwwIDMzNiAwIDE2LTE2IDBMMTYgNTEyIDAgNTEybDAtMTZMMCAxNiAwIDAgMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 496l0-320-152 0-8 0 0-8 0-152L16 16l0 480 352 0zm-6.6-336L224 22.6 224 160l137.4 0zM16 0L224 0 384 160l0 336 0 16-16 0L16 512 0 512l0-16L0 16 0 0 16 0z" />
    </Icon>
);

export default File;