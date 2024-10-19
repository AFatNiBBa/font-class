
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-regular bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw0NDggMCAwIDQ4TDAgMTEyIDAgNjR6TTY0IDIyNGwzMjAgMCAwIDQ4TDY0IDI3MmwwLTQ4ek0yODggMzg0bDAgNDgtMTI4IDAgMC00OCAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 48L0 112 0 64zM64 224l320 0 0 48L64 272l0-48zM288 384l0 48-128 0 0-48 128 0z" />
    </Icon>
);

export default BarsFilter;