
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=sharp-solid ellipsis-vertical}
 * @preview ![ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNDhsOTYgMCAwIDk2LTk2IDAgMC05NnptMCAxNjBsOTYgMCAwIDk2LTk2IDAgMC05NnptOTYgMTYwbDAgOTYtOTYgMCAwLTk2IDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M16 48l96 0 0 96-96 0 0-96zm0 160l96 0 0 96-96 0 0-96zm96 160l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default EllipsisVertical;