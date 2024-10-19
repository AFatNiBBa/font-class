
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=sharp-solid diamond-half}
 * @preview ![diamond-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBMMCAyNTYgMjU2IDUxMiAyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L0 256 256 512 256 0z" />
    </Icon>
);

export default DiamondHalf;