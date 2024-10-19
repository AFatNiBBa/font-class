
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=sharp-thin rectangle-wide}
 * @preview ![rectangle-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjI0IDgwbDAgMzUyTDE2IDQzMiAxNiA4MGw2MDggMHpNMTYgNjRMMCA2NCAwIDgwIDAgNDMybDAgMTYgMTYgMCA2MDggMCAxNiAwIDAtMTYgMC0zNTIgMC0xNi0xNiAwTDE2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 80l0 352L16 432 16 80l608 0zM16 64L0 64 0 80 0 432l0 16 16 0 608 0 16 0 0-16 0-352 0-16-16 0L16 64z" />
    </Icon>
);

export default RectangleWide;