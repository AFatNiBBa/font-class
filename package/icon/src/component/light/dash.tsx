
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=light dash}
 * @preview ![dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZjMC04LjggNy4yLTE2IDE2LTE2bDQ4MCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2TDE2IDI3MmMtOC44IDAtMTYtNy4yLTE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256c0-8.8 7.2-16 16-16l480 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 272c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Dash;