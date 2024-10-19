
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-thin exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzIgNDBsMC04TDU2IDMybDAgOCAwIDMyOCAwIDggMTYgMCAwLThMNzIgNDB6bTggMzkybC0zMiAwIDAgMzIgMzIgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M72 40l0-8L56 32l0 8 0 328 0 8 16 0 0-8L72 40zm8 392l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Exclamation;