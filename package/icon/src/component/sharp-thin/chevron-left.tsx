
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-left?s=sharp-thin chevron-left}
 * @preview ![chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTIuNyAyNTZsNS43IDUuNyAyMDggMjA4IDUuNyA1LjdMMjQzLjMgNDY0bC01LjctNS43TDM1LjMgMjU2IDIzNy43IDUzLjdsNS43LTUuN0wyMzIgMzYuN2wtNS43IDUuNy0yMDggMjA4TDEyLjcgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M12.7 256l5.7 5.7 208 208 5.7 5.7L243.3 464l-5.7-5.7L35.3 256 237.7 53.7l5.7-5.7L232 36.7l-5.7 5.7-208 208L12.7 256z" />
    </Icon>
);

export default ChevronLeft;