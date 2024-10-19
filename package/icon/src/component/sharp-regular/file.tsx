
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-regular file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzM2IDQ2NGwwLTMwNC0xMTIgMCAwLTExMkw0OCA0OGwwIDQxNiAyODggMHpNNDggMEwyNTYgMCAzODQgMTI4bDAgMzM2IDAgNDgtNDggMEw0OCA1MTIgMCA1MTJsMC00OEwwIDQ4IDAgMCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 464l0-304-112 0 0-112L48 48l0 416 288 0zM48 0L256 0 384 128l0 336 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0z" />
    </Icon>
);

export default File;