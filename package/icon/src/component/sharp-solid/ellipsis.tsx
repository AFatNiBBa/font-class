
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=sharp-solid ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzA0bDAtOTYgOTYgMCAwIDk2LTk2IDB6bTE2MCAwbDAtOTYgOTYgMCAwIDk2LTk2IDB6bTE2MC05Nmw5NiAwIDAgOTYtOTYgMCAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 304l0-96 96 0 0 96-96 0zm160 0l0-96 96 0 0 96-96 0zm160-96l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default Ellipsis;