
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-solid bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw0NDggMCAwIDY0TDAgMTI4IDAgNjR6TTY0IDIyNGwzMjAgMCAwIDY0TDY0IDI4OGwwLTY0ek0yODggMzg0bDAgNjQtMTI4IDAgMC02NCAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM64 224l320 0 0 64L64 288l0-64zM288 384l0 64-128 0 0-64 128 0z" />
    </Icon>
);

export default BarsFilter;