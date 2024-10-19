
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-regular bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw0NDggMCAwIDQ4TDAgMTEyIDAgNjR6TTY0IDIyNGw0NDggMCAwIDQ4TDY0IDI3MmwwLTQ4ek00NDggMzg0bDAgNDhMMCA0MzJsMC00OCA0NDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l448 0 0 48L0 112 0 64zM64 224l448 0 0 48L64 272l0-48zM448 384l0 48L0 432l0-48 448 0z" />
    </Icon>
);

export default BarsStaggered;