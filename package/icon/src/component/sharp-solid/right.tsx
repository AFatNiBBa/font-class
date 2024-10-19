
import { Icon } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-solid right}
 * @preview ![right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDI1NkwyNTYgNjRsLTMyIDAgMCAxMjhMMCAxOTIgMCAzMjBsMjI0IDAgMCAxMjggMzIgMEw0NDggMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 256L256 64l-32 0 0 128L0 192 0 320l224 0 0 128 32 0L448 256z" />
    </Icon>
);

export default Right;