
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=sharp-light rectangle-wide}
 * @preview ![rectangle-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjA4IDk2bDAgMzIwTDMyIDQxNiAzMiA5Nmw1NzYgMHpNMzIgNjRMMCA2NCAwIDk2IDAgNDE2bDAgMzIgMzIgMCA1NzYgMCAzMiAwIDAtMzIgMC0zMjAgMC0zMi0zMiAwTDMyIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 96l0 320L32 416 32 96l576 0zM32 64L0 64 0 96 0 416l0 32 32 0 576 0 32 0 0-32 0-320 0-32-32 0L32 64z" />
    </Icon>
);

export default RectangleWide;