
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=thin ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDI1NmExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAwem0tMTI4IDBhMTYgMTYgMCAxIDEgLTMyIDAgMTYgMTYgMCAxIDEgMzIgMHpNOTYgMjcyYTE2IDE2IDAgMSAxIDAtMzIgMTYgMTYgMCAxIDEgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-128 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Ellipsis;