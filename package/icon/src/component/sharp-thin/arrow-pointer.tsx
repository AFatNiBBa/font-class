
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-thin arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUyLjkgMzIwTDMwNCAzMjBsMTYgMCAwLTE2LS4xLTI2TDMyIDMyIDAgNDYuOSAwIDQzMmwxOC4xIDE5LjggMTAuOSAxMiAxMC4zLTEyLjVMMTM5LjQgMzI5LjFsNjkuMyAxNDYuMyAxNC41LTYuOEwxNTIuOSAzMjB6bS0xOC4zLTEwLjFMMjguMyA0MzkuMyAxNiA0MjUuOCAxNiA1Ny4xbDEzLjQtNi4zTDMwMy45IDI4NS40IDMwNCAzMDRsLTE1Ny4xIDAtNy42IDAtNC44IDUuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M152.9 320L304 320l16 0 0-16-.1-26L32 32 0 46.9 0 432l18.1 19.8 10.9 12 10.3-12.5L139.4 329.1l69.3 146.3 14.5-6.8L152.9 320zm-18.3-10.1L28.3 439.3 16 425.8 16 57.1l13.4-6.3L303.9 285.4 304 304l-157.1 0-7.6 0-4.8 5.9z" />
    </Icon>
);

export default ArrowPointer;