
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-solid dice-d8}
 * @preview ![dice-d8](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQwIDBsMCAzMzZMMCAyNDggMjQwIDB6bTAgMzY4bDAgMTQ0TDMyIDI5MS43IDI0MCAzNjh6bTI0MC03Ni4zTDI3MiA1MTJsMC0xNDQgMjA4LTc2LjN6TTI3MiAwTDUxMiAyNDggMjcyIDMzNiAyNzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 0l0 336L0 248 240 0zm0 368l0 144L32 291.7 240 368zm240-76.3L272 512l0-144 208-76.3zM272 0L512 248 272 336 272 0z" />
    </Icon>
);

export default DiceD8;