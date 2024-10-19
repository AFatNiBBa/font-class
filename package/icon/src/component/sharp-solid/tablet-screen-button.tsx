
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=sharp-solid tablet-screen-button}
 * @preview ![tablet-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDQ0OCAwbDAgNTEyTDAgNTEyIDAgMHpNMjU2IDQ0OGEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAwek0zODQgNjRMNjQgNjRsMCAzMjAgMzIwIDAgMC0zMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L448 0l0 512L0 512 0 0zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64L64 64l0 320 320 0 0-320z" />
    </Icon>
);

export default TabletScreenButton;