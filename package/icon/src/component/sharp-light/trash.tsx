
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-light trash}
 * @preview ![trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUxLjEgMEwxNjAgMCAyODggMGw4LjkgMCA0LjcgNy41TDMzNi45IDY0bDQ3LjEgMEw0MTYgNjRsMzIgMCAwIDMyLTM0LjMgMEwzODQgNTEyIDY0IDUxMiAzNC4zIDk2IDAgOTYgMCA2NGwzMiAwIDMyLjEgMCA0Ny4xIDBMMTQ2LjQgNy41IDE1MS4xIDB6bS0yLjMgNjRsMTUwLjMgMC0yMC0zMkwxNjguOSAzMmwtMjAgMzJ6TTY2LjQgOTZMOTMuOCA0ODBsMjYwLjQgMEwzODEuNiA5NiA2Ni40IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M151.1 0L160 0 288 0l8.9 0 4.7 7.5L336.9 64l47.1 0L416 64l32 0 0 32-34.3 0L384 512 64 512 34.3 96 0 96 0 64l32 0 32.1 0 47.1 0L146.4 7.5 151.1 0zm-2.3 64l150.3 0-20-32L168.9 32l-20 32zM66.4 96L93.8 480l260.4 0L381.6 96 66.4 96z" />
    </Icon>
);

export default Trash;