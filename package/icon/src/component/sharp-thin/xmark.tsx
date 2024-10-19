
import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=sharp-thin xmark}
 * @preview ![xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDI0NC43TDQ1LjkgOTguNiAzNC42IDEwOS45IDE4MC43IDI1NiAzNC42IDQwMi4xbDExLjMgMTEuM0wxOTIgMjY3LjMgMzM4LjEgNDEzLjRsMTEuMy0xMS4zTDIwMy4zIDI1NiAzNDkuNCAxMDkuOSAzMzguMSA5OC42IDE5MiAyNDQuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 244.7L45.9 98.6 34.6 109.9 180.7 256 34.6 402.1l11.3 11.3L192 267.3 338.1 413.4l11.3-11.3L203.3 256 349.4 109.9 338.1 98.6 192 244.7z" />
    </Icon>
);

export default Xmark;