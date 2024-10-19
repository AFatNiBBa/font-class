
import { Icon } from "../../index";

/**
 * A component that renders the `house` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=sharp-solid house}
 * @preview ![house](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTExLjggMjg3LjZsNjQuMiAwIDAtNDcuNkwyODguNCAwIDAgMjQwbDAgNDcuNiA2NC4xIDAgMCAyMjQuNEwyMjQgNTEybDAtMTYwIDEyOCAwIDAgMTYwIDE2MC44IDAtMS0yMjQuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M511.8 287.6l64.2 0 0-47.6L288.4 0 0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 128 0 0 160 160.8 0-1-224.4z" />
    </Icon>
);

export default House;