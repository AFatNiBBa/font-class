
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-solid rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMjI0IDUxMiA0NDggMjU2IDIyNCAwIDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 256L224 512 448 256 224 0 0 256z" />
    </Icon>
);

export default Rhombus;