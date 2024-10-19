
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-solid forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDI1NkwyNTYgNDQ4bDAtMzg0TDUxMiAyNTZ6TTAgNDQ4TDAgNjQgMjI0IDIzMmwwIDQ4TDAgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256L256 448l0-384L512 256zM0 448L0 64 224 232l0 48L0 448z" />
    </Icon>
);

export default Forward;