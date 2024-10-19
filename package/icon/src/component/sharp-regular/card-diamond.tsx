
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=sharp-regular card-diamond}
 * @preview ![card-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggNDhsMCA0MTYgMjg4IDAgMC00MTZMNDggNDh6TTAgMEw0OCAwIDMzNiAwbDQ4IDAgMCA0OCAwIDQxNiAwIDQ4LTQ4IDBMNDggNTEyIDAgNTEybDAtNDhMMCA0OCAwIDB6TTgwIDI1NkwxOTIgMTQ0IDMwNCAyNTYgMTkyIDM2OCA4MCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-416L48 48zM0 0L48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM80 256L192 144 304 256 192 368 80 256z" />
    </Icon>
);

export default CardDiamond;