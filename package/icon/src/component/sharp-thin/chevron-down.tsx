
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-thin chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQwMy4zbDUuNy01LjcgMjA4LTIwOCA1LjctNS43TDQ2NCAxNzIuN2wtNS43IDUuN0wyNTYgMzgwLjcgNTMuNyAxNzguMyA0OCAxNzIuNyAzNi43IDE4NGw1LjcgNS43IDIwOCAyMDggNS43IDUuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 403.3l5.7-5.7 208-208 5.7-5.7L464 172.7l-5.7 5.7L256 380.7 53.7 178.3 48 172.7 36.7 184l5.7 5.7 208 208 5.7 5.7z" />
    </Icon>
);

export default ChevronDown;