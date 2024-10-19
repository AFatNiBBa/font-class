
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=regular envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMTEyYy04LjggMC0xNiA3LjItMTYgMTZsMCAyMi4xTDIyMC41IDI5MS43YzIwLjcgMTcgNTAuNCAxNyA3MS4xIDBMNDY0IDE1MC4xbDAtMjIuMWMwLTguOC03LjItMTYtMTYtMTZMNjQgMTEyek00OCAyMTIuMkw0OCAzODRjMCA4LjggNy4yIDE2IDE2IDE2bDM4NCAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTE3MS44TDMyMiAzMjguOGMtMzguNCAzMS41LTkzLjcgMzEuNS0xMzIgMEw0OCAyMTIuMnpNMCAxMjhDMCA5Mi43IDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAyNTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDQ4Yy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
    </Icon>
);

export default Envelope;