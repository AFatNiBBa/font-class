
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=sharp-solid person-dress-simple}
 * @preview ![person-dress-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNjRhNjQgNjQgMCAxIDEgMTI4IDBBNjQgNjQgMCAxIDEgNjQgNjR6bTEyOCA5Nmw2NCAyMjQtNjQgMCAwIDEyOEw2NCA1MTJsMC0xMjhMMCAzODQgNjQgMTYwbDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonDressSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zm128 96l64 224-64 0 0 128L64 512l0-128L0 384 64 160l128 0z" />
    </Icon>
);

export default PersonDressSimple;