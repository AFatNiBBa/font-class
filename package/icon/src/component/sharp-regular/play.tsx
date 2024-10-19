
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=sharp-regular play}
 * @preview ![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMkwwIDg3LjYgMCA0MjQuNCAwIDQ4MGw0OC0yOEwzMzYuNCAyODMuOCAzODQgMjU2bC00Ny42LTI3LjhMNDggNjAgMCAzMnptNDggODMuNkwyODguNyAyNTYgNDggMzk2LjRsMC0yODAuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32L0 87.6 0 424.4 0 480l48-28L336.4 283.8 384 256l-47.6-27.8L48 60 0 32zm48 83.6L288.7 256 48 396.4l0-280.9z" />
    </Icon>
);

export default Play;