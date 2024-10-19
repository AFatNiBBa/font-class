
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=light square-full}
 * @preview ![square-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDMybDAgNDQ4TDMyIDQ4MCAzMiAzMmw0NDggMHpNMzIgMEwwIDAgMCAzMiAwIDQ4MGwwIDMyIDMyIDAgNDQ4IDAgMzIgMCAwLTMyIDAtNDQ4IDAtMzJMNDgwIDAgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32l0 448L32 480 32 32l448 0zM32 0L0 0 0 32 0 480l0 32 32 0 448 0 32 0 0-32 0-448 0-32L480 0 32 0z" />
    </Icon>
);

export default SquareFull;