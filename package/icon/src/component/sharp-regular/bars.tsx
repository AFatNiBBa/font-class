
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=sharp-regular bars}
 * @preview ![bars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw0NDggMCAwIDQ4TDAgMTEyIDAgNjR6TTAgMjI0bDQ0OCAwIDAgNDhMMCAyNzJsMC00OHpNNDQ4IDM4NGwwIDQ4TDAgNDMybDAtNDggNDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 48L0 112 0 64zM0 224l448 0 0 48L0 272l0-48zM448 384l0 48L0 432l0-48 448 0z" />
    </Icon>
);

export default Bars;