
import { Icon } from "../../index";

/**
 * A component that renders the `industry` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=sharp-solid industry}
 * @preview ![industry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDMyTDMyIDMybDAgMTkyIDAgMTYwIDAgOTYgNTEyIDAgMC0yNTYgMC05NkwzNTIgMjI0bDAtOTZMMTYwIDIyNGwwLTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 32L32 32l0 192 0 160 0 96 512 0 0-256 0-96L352 224l0-96L160 224l0-192z" />
    </Icon>
);

export default Industry;