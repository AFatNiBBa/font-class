
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-regular greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NC45TDM3MCAyMzQuMmwxNCA2LjQgMCAzMC44LTE0IDYuNEwwIDQ0Ny4ybDAtNTIuOEwzMDIuMyAyNTYgMCAxMTcuNiAwIDY0Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64.9L370 234.2l14 6.4 0 30.8-14 6.4L0 447.2l0-52.8L302.3 256 0 117.6 0 64.9z" />
    </Icon>
);

export default GreaterThan;