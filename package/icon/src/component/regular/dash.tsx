
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=regular dash}
 * @preview ![dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZjMC0xMy4zIDEwLjctMjQgMjQtMjRsNDY0IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRMMjQgMjgwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256c0-13.3 10.7-24 24-24l464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Dash;