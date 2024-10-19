
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-thin rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDgwbDAgMzUyTDE2IDQzMiAxNiA4MGw0ODAgMHpNMTYgNjRMMCA2NCAwIDgwIDAgNDMybDAgMTYgMTYgMCA0ODAgMCAxNiAwIDAtMTYgMC0zNTIgMC0xNi0xNiAwTDE2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 80l0 352L16 432 16 80l480 0zM16 64L0 64 0 80 0 432l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L16 64z" />
    </Icon>
);

export default Rectangle;