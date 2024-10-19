
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-light rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjAyLjcgNDg3LjdMMjI0IDUxMmwyMS4zLTI0LjNMNDQ4IDI1NiAyNDUuMyAyNC4zIDIyNCAwIDIwMi43IDI0LjMgMCAyNTYgMjAyLjcgNDg3Ljd6TTIyNCA0NjMuNEw0Mi41IDI1NiAyMjQgNDguNiA0MDUuNSAyNTYgMjI0IDQ2My40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M202.7 487.7L224 512l21.3-24.3L448 256 245.3 24.3 224 0 202.7 24.3 0 256 202.7 487.7zM224 463.4L42.5 256 224 48.6 405.5 256 224 463.4z" />
    </Icon>
);

export default Rhombus;