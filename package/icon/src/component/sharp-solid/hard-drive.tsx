
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-solid hard-drive}
 * @preview ![hard-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw1MTIgMCAwIDIyNEwwIDI1NiAwIDMyek01MTIgMjg4bDAgMTkyTDAgNDgwIDAgMjg4bDUxMiAwek0zMjAgNDE2YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHptMTI4LTMyYTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 224L0 256 0 32zM512 288l0 192L0 480 0 288l512 0zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default HardDrive;