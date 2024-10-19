
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-solid dice-d4}
 * @preview ![dice-d4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMjBMMjQwIDBsMCA1MTJMMCAzMjB6TTI3MiAwTDUxMiAzMjAgMjcyIDUxMiAyNzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 320L240 0l0 512L0 320zM272 0L512 320 272 512 272 0z" />
    </Icon>
);

export default DiceD4;