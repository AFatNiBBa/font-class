
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-light bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDM2M2wxNi4xIDkuNEwzNTIgNDU2LjMgMzUyIDMyIDMyIDMybDAgNDI0LjMgMTQzLjktODMuOUwxOTIgMzYzek0zMiA0OTMuM0wwIDUxMmwwLTM3TDAgMzIgMCAwIDMyIDAgMzUyIDBsMzIgMCAwIDMyIDAgNDQzIDAgMzctMzItMTguN0wxOTIgNDAwIDMyIDQ5My4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 363l16.1 9.4L352 456.3 352 32 32 32l0 424.3 143.9-83.9L192 363zM32 493.3L0 512l0-37L0 32 0 0 32 0 352 0l32 0 0 32 0 443 0 37-32-18.7L192 400 32 493.3z" />
    </Icon>
);

export default Bookmark;