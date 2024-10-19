
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=light envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMzkuOUwyMjcuNiAzMTEuM2MxNi45IDEyLjQgMzkuOSAxMi40IDU2LjggMEw0ODAgMTY3LjlsMC0zOS45YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDY0IDk2ek0zMiAyMDcuNkwzMiAzODRjMCAxNy43IDE0LjMgMzIgMzIgMzJsMzg0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xNzYuNEwzMDMuMyAzMzcuMWMtMjguMiAyMC42LTY2LjUgMjAuNi05NC42IDBMMzIgMjA3LjZ6TTAgMTI4QzAgOTIuNyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjU2YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ0OGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9l0-39.9c0-17.7-14.3-32-32-32L64 96zM32 207.6L32 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-176.4L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
    </Icon>
);

export default Envelope;