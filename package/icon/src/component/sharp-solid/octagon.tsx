
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-solid octagon}
 * @preview ![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzNTJWMTYwTDE2MCAwSDM1Mkw1MTIgMTYwVjM1MkwzNTIgNTEySDE2MEwwIDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 352V160L160 0H352L512 160V352L352 512H160L0 352z" />
    </Icon>
);

export default Octagon;