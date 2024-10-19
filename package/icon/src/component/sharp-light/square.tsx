
import { Icon } from "../../index";

/**
 * A component that renders the `square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square?s=sharp-light square}
 * @preview ![square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDE2IDY0bDAgMzg0TDMyIDQ0OCAzMiA2NGwzODQgMHpNMzIgMzJMMCAzMiAwIDY0IDAgNDQ4bDAgMzIgMzIgMCAzODQgMCAzMiAwIDAtMzIgMC0zODQgMC0zMi0zMiAwTDMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Square: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32z" />
    </Icon>
);

export default Square;