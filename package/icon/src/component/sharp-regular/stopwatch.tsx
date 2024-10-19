
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-regular stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDBMMzA0IDBsMCA0OC01NiAwIDAgNDkuNGM0My40IDUgODIuOCAyMy4zIDExMy44IDUwLjlMMzkxIDExOWwxNy0xN0w0NDEuOSAxMzZsLTE3IDE3LTMxIDMxYzI0IDMzLjkgMzguMSA3NS4zIDM4LjEgMTIwYzAgMTE0LjktOTMuMSAyMDgtMjA4IDIwOFMxNiA0MTguOSAxNiAzMDRDMTYgMTk3LjIgOTYuNCAxMDkuMyAyMDAgOTcuNEwyMDAgNDhsLTU2IDAgMC00OHptODAgNDY0YTE2MCAxNjAgMCAxIDAgMC0zMjAgMTYwIDE2MCAwIDEgMCAwIDMyMHptMjQtMjQ4bDAgMTA0IDAgMjQtNDggMCAwLTI0IDAtMTA0IDAtMjQgNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L304 0l0 48-56 0 0 49.4c43.4 5 82.8 23.3 113.8 50.9L391 119l17-17L441.9 136l-17 17-31 31c24 33.9 38.1 75.3 38.1 120c0 114.9-93.1 208-208 208S16 418.9 16 304C16 197.2 96.4 109.3 200 97.4L200 48l-56 0 0-48zm80 464a160 160 0 1 0 0-320 160 160 0 1 0 0 320zm24-248l0 104 0 24-48 0 0-24 0-104 0-24 48 0 0 24z" />
    </Icon>
);

export default Stopwatch;