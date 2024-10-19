
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=sharp-light circle-small}
 * @preview ![circle-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDEyOGExMjggMTI4IDAgMSAxIDAgMjU2IDEyOCAxMjggMCAxIDEgMC0yNTZ6bTAgMjg4YTE2MCAxNjAgMCAxIDAgMC0zMjAgMTYwIDE2MCAwIDEgMCAwIDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 288a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CircleSmall;