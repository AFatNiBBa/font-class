
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=light slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMy40IDYuMUM4LjktLjggMTktMiAyNS45IDMuNGw2MDggNDgwYzYuOSA1LjUgOC4xIDE1LjUgMi42IDIyLjVzLTE1LjUgOC4xLTIyLjUgMi42TDYuMSAyOC42Qy0uOCAyMy4xLTIgMTMgMy40IDYuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M3.4 6.1C8.9-.8 19-2 25.9 3.4l608 480c6.9 5.5 8.1 15.5 2.6 22.5s-15.5 8.1-22.5 2.6L6.1 28.6C-.8 23.1-2 13 3.4 6.1z" />
    </Icon>
);

export default Slash;