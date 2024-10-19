
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=solid tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTkyQzMyIDg2IDExOCAwIDIyNCAwUzQxNiA4NiA0MTYgMTkybDAgMjI0TDMyIDQxNmwwLTIyNHpNMCA0ODBjMC0xNy43IDE0LjMtMzIgMzItMzJsMzg0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMMzIgNTEyYy0xNy43IDAtMzItMTQuMy0zMi0zMnpNMjQ4IDEyMGMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNGwwIDQwLTQ4IDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRsNDggMCAwIDEyMGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMTIwIDQ4IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTQ4IDAgMC00MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192C32 86 118 0 224 0S416 86 416 192l0 224L32 416l0-224zM0 480c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32zM248 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 120c0 13.3 10.7 24 24 24s24-10.7 24-24l0-120 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-40z" />
    </Icon>
);

export default Tombstone;