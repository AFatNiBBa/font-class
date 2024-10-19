
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=sharp-solid tablet-button}
 * @preview ![tablet-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDBMMCAwIDAgNTEybDQ0OCAwTDQ0OCAwek0yMjQgNDAwYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 0L0 0 0 512l448 0L448 0zM224 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TabletButton;