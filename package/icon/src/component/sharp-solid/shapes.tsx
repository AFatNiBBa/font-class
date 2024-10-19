
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-solid shapes}
 * @preview ![shapes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDIyNGwyNTYgMEwyODggMCAxNjAgMjI0em0xMjggNDhsMCAyMjQgMjI0IDAgMC0yMjQtMjI0IDB6TTEyOCA1MTJhMTI4IDEyOCAwIDEgMCAwLTI1NiAxMjggMTI4IDAgMSAwIDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 224l256 0L288 0 160 224zm128 48l0 224 224 0 0-224-224 0zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default Shapes;