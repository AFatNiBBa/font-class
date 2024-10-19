
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-right?s=sharp-thin chevron-right}
 * @preview ![chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzA3LjMgMjU2bC01LjcgNS43LTIwOCAyMDhMODggNDc1LjMgNzYuNyA0NjRsNS43LTUuN0wyODQuNyAyNTYgODIuMyA1My43IDc2LjcgNDggODggMzYuN2w1LjcgNS43IDIwOCAyMDggNS43IDUuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M307.3 256l-5.7 5.7-208 208L88 475.3 76.7 464l5.7-5.7L284.7 256 82.3 53.7 76.7 48 88 36.7l5.7 5.7 208 208 5.7 5.7z" />
    </Icon>
);

export default ChevronRight;