
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=sharp-solid tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNjRsMCAyODggNTEyIDAgMC0yODhMNjQgNjR6TTAgMEw2NCAwIDU3NiAwbDY0IDAgMCA2NCAwIDI4OCAwIDY0LTY0IDBMNjQgNDE2IDAgNDE2bDAtNjRMMCA2NCAwIDB6TTEyOCA0NDhsMzg0IDAgMzIgMCAwIDY0LTMyIDAtMzg0IDAtMzIgMCAwLTY0IDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l0 288 512 0 0-288L64 64zM0 0L64 0 576 0l64 0 0 64 0 288 0 64-64 0L64 416 0 416l0-64L0 64 0 0zM128 448l384 0 32 0 0 64-32 0-384 0-32 0 0-64 32 0z" />
    </Icon>
);

export default Tv;