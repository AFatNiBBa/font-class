
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=solid window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDk2YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjB6TTk2IDk2YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHptNjQgMzJhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHpNMjg4IDk2YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320zM96 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM288 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Window;