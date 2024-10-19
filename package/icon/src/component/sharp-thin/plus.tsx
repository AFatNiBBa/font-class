
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-thin plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjMyIDcybDAtOC0xNiAwIDAgOCAwIDE3Nkw0MCAyNDhsLTggMCAwIDE2IDggMCAxNzYgMCAwIDE3NiAwIDggMTYgMCAwLTggMC0xNzYgMTc2IDAgOCAwIDAtMTYtOCAwLTE3NiAwIDAtMTc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 72l0-8-16 0 0 8 0 176L40 248l-8 0 0 16 8 0 176 0 0 176 0 8 16 0 0-8 0-176 176 0 8 0 0-16-8 0-176 0 0-176z" />
    </Icon>
);

export default Plus;