
import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=regular xmark}
 * @preview ![xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzQ1IDEzN2M5LjQtOS40IDkuNC0yNC42IDAtMzMuOXMtMjQuNi05LjQtMzMuOSAwbC0xMTkgMTE5TDczIDEwM2MtOS40LTkuNC0yNC42LTkuNC0zMy45IDBzLTkuNCAyNC42IDAgMzMuOWwxMTkgMTE5TDM5IDM3NWMtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlzMjQuNiA5LjQgMzMuOSAwbDExOS0xMTlMMzExIDQwOWM5LjQgOS40IDI0LjYgOS40IDMzLjkgMHM5LjQtMjQuNiAwLTMzLjlsLTExOS0xMTlMMzQ1IDEzN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z" />
    </Icon>
);

export default Xmark;