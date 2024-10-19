
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=sharp-solid down}
 * @preview ![down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDQ4MEwzODQgMjg4bDAtMzItMTI4IDAgMC0yMjRMMTI4IDMybDAgMjI0TDAgMjU2bDAgMzJMMTkyIDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Down: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 480L384 288l0-32-128 0 0-224L128 32l0 224L0 256l0 32L192 480z" />
    </Icon>
);

export default Down;