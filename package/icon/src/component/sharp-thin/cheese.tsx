
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-thin cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjcybDAgMTkyIDQ4MCAwIDAtMTkyTDE2IDI3MnptMTAuMS0xNkw0OTYgMjU2YzAtMTEzLjEtOTAuMi0yMDUuMS0yMDIuNi0yMDcuOUwyNi4xIDI1NnpNMCAyNTZMMjg4IDMyYzEyMy43IDAgMjI0IDEwMC4zIDIyNCAyMjRsMCAyMDggMCAxNi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTE2TDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 272l0 192 480 0 0-192L16 272zm10.1-16L496 256c0-113.1-90.2-205.1-202.6-207.9L26.1 256zM0 256L288 32c123.7 0 224 100.3 224 224l0 208 0 16-16 0L16 480 0 480l0-16L0 256z" />
    </Icon>
);

export default Cheese;