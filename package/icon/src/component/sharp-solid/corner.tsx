
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=sharp-solid corner}
 * @preview ![corner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNjBsMzIgMCAzODQgMCAzMiAwIDAgMzIgMCAxNjAgMCAzMi02NCAwIDAtMzIgMC0xMjhMMzIgMjI0IDAgMjI0bDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 160l32 0 384 0 32 0 0 32 0 160 0 32-64 0 0-32 0-128L32 224 0 224l0-64z" />
    </Icon>
);

export default Corner;