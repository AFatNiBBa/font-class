
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=light hyphen}
 * @preview ![hyphen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZjMC04LjggNy4yLTE2IDE2LTE2bDI4OCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2TDE2IDI3MmMtOC44IDAtMTYtNy4yLTE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 256c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 272c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Hyphen;