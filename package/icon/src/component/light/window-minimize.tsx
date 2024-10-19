
import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=light window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNDQ4Yy04LjggMC0xNiA3LjItMTYgMTZzNy4yIDE2IDE2IDE2bDQ4MCAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2TDE2IDQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 448z" />
    </Icon>
);

export default WindowMinimize;