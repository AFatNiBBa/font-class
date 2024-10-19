
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-light stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDk2bDAgMzIwTDMyIDQxNiAzMiA5NmwzMjAgMHpNMzIgNjRMMCA2NCAwIDk2IDAgNDE2bDAgMzIgMzIgMCAzMjAgMCAzMiAwIDAtMzIgMC0zMjAgMC0zMi0zMiAwTDMyIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 96l0 320L32 416 32 96l320 0zM32 64L0 64 0 96 0 416l0 32 32 0 320 0 32 0 0-32 0-320 0-32-32 0L32 64z" />
    </Icon>
);

export default Stop;