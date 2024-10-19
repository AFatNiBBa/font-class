
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-solid person-simple}
 * @preview ![person-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNjRhNjQgNjQgMCAxIDEgMTI4IDBBNjQgNjQgMCAxIDEgNjQgNjR6bTE2MCA5Nmw4IDE5Mi00MCAwIDAgMTYwTDY0IDUxMmwwLTE2MC00MCAwIDgtMTkyIDE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zm160 96l8 192-40 0 0 160L64 512l0-160-40 0 8-192 192 0z" />
    </Icon>
);

export default PersonSimple;