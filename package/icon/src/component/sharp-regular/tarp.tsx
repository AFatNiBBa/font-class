
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-regular tarp}
 * @preview ![tarp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTEybDQ4MCAwIDAgMTc2LTExMiAwIDAgMTEyTDQ4IDQwMGwwLTI4OHpNNTc2IDMyMGwwLTIwOCAwLTQ4LTQ4IDBMNDggNjQgMCA2NGwwIDQ4TDAgNDAwbDAgNDggNDggMCA0MDAgMEw1NzYgMzIwek0xMTIgMjA4YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l480 0 0 176-112 0 0 112L48 400l0-288zM576 320l0-208 0-48-48 0L48 64 0 64l0 48L0 400l0 48 48 0 400 0L576 320zM112 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Tarp;