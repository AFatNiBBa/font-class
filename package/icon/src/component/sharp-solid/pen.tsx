
import { Icon } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-solid pen}
 * @preview ![pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA1MTJMMzIgMzUyIDI5Mi43IDkxLjNsMTI4IDEyOEwxNjAgNDgwIDAgNTEyek00NDMuMyAxOTYuN2wtMTI4LTEyOEwzODQgMCA1MTIgMTI4bC02OC43IDY4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512L32 352 292.7 91.3l128 128L160 480 0 512zM443.3 196.7l-128-128L384 0 512 128l-68.7 68.7z" />
    </Icon>
);

export default Pen;