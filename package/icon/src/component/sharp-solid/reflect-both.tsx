
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-solid reflect-both}
 * @preview ![reflect-both](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMzJMMjU2IDE5MiA0MTYgMzJsMC0zMkw5NiAwbDAgMzJ6bTk2IDIyNEwzMiA5NiAwIDk2IDAgNDE2bDMyIDBMMTkyIDI1NnptMTI4IDBMNDgwIDQxNmwzMiAwIDAtMzIwLTMyIDBMMzIwIDI1NnptLTY0IDY0TDk2IDQ4MGwwIDMyIDMyMCAwIDAtMzJMMjU2IDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32L256 192 416 32l0-32L96 0l0 32zm96 224L32 96 0 96 0 416l32 0L192 256zm128 0L480 416l32 0 0-320-32 0L320 256zm-64 64L96 480l0 32 320 0 0-32L256 320z" />
    </Icon>
);

export default ReflectBoth;