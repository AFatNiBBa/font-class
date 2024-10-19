
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-light stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBMMzIwIDBsMCAzMi04MCAwIDAgNjQuNmM0OS40IDMuOCA5NCAyNC44IDEyNy43IDU3bDM3LTM3TDQxNiAxMDUuNCA0MzguNiAxMjhsLTExLjMgMTEuMy0zOC4yIDM4LjJDNDE2IDIxMi42IDQzMiAyNTYuNCA0MzIgMzA0YzAgMTE0LjktOTMuMSAyMDgtMjA4IDIwOFMxNiA0MTguOSAxNiAzMDRjMC0xMDkuNSA4NC42LTE5OS4yIDE5Mi0yMDcuNEwyMDggMzJsLTgwIDAgMC0zMnpNNDggMzA0YTE3NiAxNzYgMCAxIDAgMzUyIDBBMTc2IDE3NiAwIDEgMCA0OCAzMDR6bTE5Mi05NmwwIDExMiAwIDE2LTMyIDAgMC0xNiAwLTExMiAwLTE2IDMyIDAgMCAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0L320 0l0 32-80 0 0 64.6c49.4 3.8 94 24.8 127.7 57l37-37L416 105.4 438.6 128l-11.3 11.3-38.2 38.2C416 212.6 432 256.4 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-109.5 84.6-199.2 192-207.4L208 32l-80 0 0-32zM48 304a176 176 0 1 0 352 0A176 176 0 1 0 48 304zm192-96l0 112 0 16-32 0 0-16 0-112 0-16 32 0 0 16z" />
    </Icon>
);

export default Stopwatch;