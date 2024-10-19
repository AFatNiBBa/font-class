
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-light t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzJMMCAzMiAwIDY0bDE2IDAgMTYwIDAgMCA0MDAgMCAxNiAzMiAwIDAtMTYgMC00MDAgMTYwIDAgMTYgMCAwLTMyLTE2IDBMMTkyIDMyIDE2IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 160 0 0 400 0 16 32 0 0-16 0-400 160 0 16 0 0-32-16 0L192 32 16 32z" />
    </Icon>
);

export default T;