
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=regular ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDMyIDI1NmE0OCA0OCAwIDEgMSAtOTYgMCA0OCA0OCAwIDEgMSA5NiAwem0tMTYwIDBhNDggNDggMCAxIDEgLTk2IDAgNDggNDggMCAxIDEgOTYgMHpNNjQgMzA0YTQ4IDQ4IDAgMSAxIDAtOTYgNDggNDggMCAxIDEgMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 256a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM64 304a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default Ellipsis;