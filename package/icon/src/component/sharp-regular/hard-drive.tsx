
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-regular hard-drive}
 * @preview ![hard-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggODBsMCAxNzYgNDE2IDAgMC0xNzZMNDggODB6bTAgMjI0bDAgMTI4IDQxNiAwIDAtMTI4TDQ4IDMwNHpNMCAyNTZMMCA4MCAwIDMybDQ4IDAgNDE2IDAgNDggMCAwIDQ4IDAgMTc2IDAgNDggMCAxMjggMCA0OC00OCAwTDQ4IDQ4MCAwIDQ4MGwwLTQ4TDAgMzA0bDAtNDh6TTI4MCAzNjhhMjQgMjQgMCAxIDEgNDggMCAyNCAyNCAwIDEgMSAtNDggMHptMTIwLTI0YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 80l0 176 416 0 0-176L48 80zm0 224l0 128 416 0 0-128L48 304zM0 256L0 80 0 32l48 0 416 0 48 0 0 48 0 176 0 48 0 128 0 48-48 0L48 480 0 480l0-48L0 304l0-48zM280 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default HardDrive;