
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-solid forward-step}
 * @preview ![forward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDk2bDAtMzIgNjQgMCAwIDMyIDAgMzIwIDAgMzItNjQgMCAwLTMyIDAtMTYwTDAgNDQ4IDAgNjQgMjU2IDI1NmwwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 96l0-32 64 0 0 32 0 320 0 32-64 0 0-32 0-160L0 448 0 64 256 256l0-160z" />
    </Icon>
);

export default ForwardStep;