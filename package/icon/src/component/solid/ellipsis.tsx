
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=solid ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOCAyNTZhNTYgNTYgMCAxIDEgMTEyIDBBNTYgNTYgMCAxIDEgOCAyNTZ6bTE2MCAwYTU2IDU2IDAgMSAxIDExMiAwIDU2IDU2IDAgMSAxIC0xMTIgMHptMjE2LTU2YTU2IDU2IDAgMSAxIDAgMTEyIDU2IDU2IDAgMSAxIDAtMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default Ellipsis;