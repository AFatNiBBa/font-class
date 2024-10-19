
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=sharp-light ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjg4bDAtNjQgNjQgMCAwIDY0LTY0IDB6bTE2MCAwbDAtNjQgNjQgMCAwIDY0LTY0IDB6bTE2MC02NGw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 288l0-64 64 0 0 64-64 0zm160 0l0-64 64 0 0 64-64 0zm160-64l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Ellipsis;