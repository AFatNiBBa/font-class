
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=sharp-regular chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIxLjkgMjU2bC0xNyAxN0wxMTMgNDY1bC0xNyAxN0w2Mi4xIDQ0OGwxNy0xNyAxNzUtMTc1TDc5IDgxbC0xNy0xN0w5NiAzMC4xbDE3IDE3TDMwNSAyMzlsMTcgMTd6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M321.9 256l-17 17L113 465l-17 17L62.1 448l17-17 175-175L79 81l-17-17L96 30.1l17 17L305 239l17 17z" />
    </Icon>
);

export default ChevronRight;