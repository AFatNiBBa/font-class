
import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=sharp-light xmark}
 * @preview ![xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDIzMy40TDU5LjUgMTAwLjkgMzYuOSAxMjMuNSAxNjkuNCAyNTYgMzYuOSAzODguNWwyMi42IDIyLjZMMTkyIDI3OC42IDMyNC41IDQxMS4xbDIyLjYtMjIuNkwyMTQuNiAyNTYgMzQ3LjEgMTIzLjVsLTIyLjYtMjIuNkwxOTIgMjMzLjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 233.4L59.5 100.9 36.9 123.5 169.4 256 36.9 388.5l22.6 22.6L192 278.6 324.5 411.1l22.6-22.6L214.6 256 347.1 123.5l-22.6-22.6L192 233.4z" />
    </Icon>
);

export default Xmark;