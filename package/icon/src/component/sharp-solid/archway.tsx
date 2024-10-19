
import { Icon } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-solid archway}
 * @preview ![archway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwzMiAwIDQ0OCAwIDMyIDAgMCA2NC0zMiAwTDMyIDk2IDAgOTYgMCAzMnpNMCA0MTZsMzIgMCAwLTI4OCA0NDggMCAwIDI4OCAzMiAwIDAgNjQtMzIgMC02NCAwLTMyIDAtMzIgMCAwLTEyOGMwLTUzLTQzLTk2LTk2LTk2cy05NiA0My05NiA5NmwwIDEyOC0zMiAwLTMyIDAtNjQgMEwwIDQ4MGwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 448 0 32 0 0 64-32 0L32 96 0 96 0 32zM0 416l32 0 0-288 448 0 0 288 32 0 0 64-32 0-64 0-32 0-32 0 0-128c0-53-43-96-96-96s-96 43-96 96l0 128-32 0-32 0-64 0L0 480l0-64z" />
    </Icon>
);

export default Archway;