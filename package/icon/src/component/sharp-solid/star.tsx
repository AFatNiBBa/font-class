
import { Icon } from "../../index";

/**
 * A component that renders the `star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=sharp-solid star}
 * @preview ![star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4LjEgMGw4Ni41IDE2NCAxODIuNyAzMS42TDQyOCAzMjguNSA0NTQuNCA1MTIgMjg4LjEgNDMwLjIgMTIxLjcgNTEybDI2LjQtMTgzLjVMMTguOSAxOTUuNiAyMDEuNSAxNjQgMjg4LjEgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Star: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288.1 0l86.5 164 182.7 31.6L428 328.5 454.4 512 288.1 430.2 121.7 512l26.4-183.5L18.9 195.6 201.5 164 288.1 0z" />
    </Icon>
);

export default Star;