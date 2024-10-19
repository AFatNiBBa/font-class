
import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-solid circle-left}
 * @preview ![circle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDI1NkEyNTYgMjU2IDAgMSAwIDAgMjU2YTI1NiAyNTYgMCAxIDAgNTEyIDB6TTI1NiAxMjhsMCA4MCAxMjggMCAwIDk2LTEyOCAwIDAgODAtMTYgMEwxMTIgMjU2IDI0MCAxMjhsMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l0 80 128 0 0 96-128 0 0 80-16 0L112 256 240 128l16 0z" />
    </Icon>
);

export default CircleLeft;