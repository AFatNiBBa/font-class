
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-thin frame}
 * @preview ![frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDExMmwwLTE2LTY0IDAgMC02NC0xNiAwIDAgNjRMODAgOTZsMC02NEw2NCAzMmwwIDY0TDAgOTZsMCAxNiA2NCAwIDAgMjg4TDAgNDAwbDAgMTYgNjQgMCAwIDY0IDE2IDAgMC02NCAyODggMCAwIDY0IDE2IDAgMC02NCA2NCAwIDAtMTYtNjQgMCAwLTI4OCA2NCAwek04MCA0MDBsMC0yODggMjg4IDAgMCAyODhMODAgNDAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 112l0-16-64 0 0-64-16 0 0 64L80 96l0-64L64 32l0 64L0 96l0 16 64 0 0 288L0 400l0 16 64 0 0 64 16 0 0-64 288 0 0 64 16 0 0-64 64 0 0-16-64 0 0-288 64 0zM80 400l0-288 288 0 0 288L80 400z" />
    </Icon>
);

export default Frame;