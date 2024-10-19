
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-light rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDk2bDAgMzIwTDMyIDQxNiAzMiA5Nmw0NDggMHpNMzIgNjRMMCA2NCAwIDk2IDAgNDE2bDAgMzIgMzIgMCA0NDggMCAzMiAwIDAtMzIgMC0zMjAgMC0zMi0zMiAwTDMyIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 96l0 320L32 416 32 96l448 0zM32 64L0 64 0 96 0 416l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0L32 64z" />
    </Icon>
);

export default Rectangle;