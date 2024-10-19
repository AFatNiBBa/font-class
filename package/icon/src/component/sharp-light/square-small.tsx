
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-light square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDEyOGwwIDI1NkwzMiAzODRsMC0yNTYgMjU2IDB6TTMyIDk2TDAgOTZsMCAzMkwwIDM4NGwwIDMyIDMyIDAgMjU2IDAgMzIgMCAwLTMyIDAtMjU2IDAtMzItMzIgMEwzMiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 128l0 256L32 384l0-256 256 0zM32 96L0 96l0 32L0 384l0 32 32 0 256 0 32 0 0-32 0-256 0-32-32 0L32 96z" />
    </Icon>
);

export default SquareSmall;