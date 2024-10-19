
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=sharp-regular ellipsis-vertical}
 * @preview ![ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgNTZsODAgMCAwIDgwLTgwIDAgMC04MHptMCAxNjBsODAgMCAwIDgwLTgwIDAgMC04MHptODAgMTYwbDAgODAtODAgMCAwLTgwIDgwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M24 56l80 0 0 80-80 0 0-80zm0 160l80 0 0 80-80 0 0-80zm80 160l0 80-80 0 0-80 80 0z" />
    </Icon>
);

export default EllipsisVertical;