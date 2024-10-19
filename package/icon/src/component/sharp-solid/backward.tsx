
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-solid backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMjU2IDQ0OGwwLTM4NEwwIDI1NnpNNTEyIDQ0OGwwLTM4NEwyODggMjMybDAgNDhMNTEyIDQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L256 448l0-384L0 256zM512 448l0-384L288 232l0 48L512 448z" />
    </Icon>
);

export default Backward;