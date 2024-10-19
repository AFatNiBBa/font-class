
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=thin circle-small}
 * @preview ![circle-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDExMmExNDQgMTQ0IDAgMSAxIDAgMjg4IDE0NCAxNDQgMCAxIDEgMC0yODh6bTAgMzA0YTE2MCAxNjAgMCAxIDAgMC0zMjAgMTYwIDE2MCAwIDEgMCAwIDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CircleSmall;