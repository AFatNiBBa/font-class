
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-solid bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw0NDggMCAwIDY0TDAgMTI4IDAgNjR6TTY0IDIyNGw0NDggMCAwIDY0TDY0IDI4OGwwLTY0ek00NDggMzg0bDAgNjRMMCA0NDhsMC02NCA0NDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM64 224l448 0 0 64L64 288l0-64zM448 384l0 64L0 448l0-64 448 0z" />
    </Icon>
);

export default BarsStaggered;