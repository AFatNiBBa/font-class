
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=light corner}
 * @preview ![corner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNzZjMC04LjggNy4yLTE2IDE2LTE2bDM4NCAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMTYwYzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtMTYwYzAtOC44LTcuMi0xNi0xNi0xNkwxNiAxOTJjLTguOCAwLTE2LTcuMi0xNi0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 176c0-8.8 7.2-16 16-16l384 0c26.5 0 48 21.5 48 48l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160c0-8.8-7.2-16-16-16L16 192c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Corner;