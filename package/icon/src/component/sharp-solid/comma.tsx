
import { Icon } from "../../index";

/**
 * A component that renders the `comma` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=sharp-solid comma}
 * @preview ![comma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMjg4TDE2IDUxMkg4MGw4MC0yMjRINDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 288L16 512H80l80-224H48z" />
    </Icon>
);

export default Comma;