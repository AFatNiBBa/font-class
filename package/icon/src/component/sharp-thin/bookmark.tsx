
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-thin bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDM4MS41bDguMSA0LjcgMTY3LjkgOThMMzY4IDE2IDE2IDE2bDAgNDY4LjEgMTY3LjktOTggOC4xLTQuN3pNMTYgNTAyLjdMMCA1MTJsMC0xOC41TDAgMTYgMCAwIDE2IDAgMzY4IDBsMTYgMCAwIDE2IDAgNDc3LjUgMCAxOC41LTE2LTkuM0wxOTIgNDAwIDE2IDUwMi43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 381.5l8.1 4.7 167.9 98L368 16 16 16l0 468.1 167.9-98 8.1-4.7zM16 502.7L0 512l0-18.5L0 16 0 0 16 0 368 0l16 0 0 16 0 477.5 0 18.5-16-9.3L192 400 16 502.7z" />
    </Icon>
);

export default Bookmark;