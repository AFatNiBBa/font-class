
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-regular t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgMzJMMCAzMiAwIDgwbDI0IDAgMTQ0IDAgMCAzNzYgMCAyNCA0OCAwIDAtMjQgMC0zNzYgMTQ0IDAgMjQgMCAwLTQ4LTI0IDBMMTkyIDMyIDI0IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 144 0 0 376 0 24 48 0 0-24 0-376 144 0 24 0 0-48-24 0L192 32 24 32z" />
    </Icon>
);

export default T;