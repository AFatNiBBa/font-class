
import { Icon } from "../../index";

/**
 * A component that renders the `tree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=sharp-solid tree}
 * @preview ![tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBMNTYgMTc2bDAgMzIgNDggMEwyNCAyODhsMCAzMiA1NiAwTDAgNDE2bDAgMzIgMTkyIDAgMCAzMiAwIDMyIDY0IDAgMC0zMiAwLTMyIDE5MiAwIDAtMzItODAtOTYgNTYgMCAwLTMyLTgwLTgwIDQ4IDAgMC0zMkwyMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0L56 176l0 32 48 0L24 288l0 32 56 0L0 416l0 32 192 0 0 32 0 32 64 0 0-32 0-32 192 0 0-32-80-96 56 0 0-32-80-80 48 0 0-32L224 0z" />
    </Icon>
);

export default Tree;