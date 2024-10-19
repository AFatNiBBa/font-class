
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-solid diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMjU2IDAgNTEyIDI1NiAyNTYgNTEyIDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L256 0 512 256 256 512 0 256z" />
    </Icon>
);

export default Diamond;