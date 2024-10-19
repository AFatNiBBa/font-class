
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-solid sidebar}
 * @preview ![sidebar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw1MTIgMCAwIDQ0OEwwIDQ4MCAwIDMyek0yMjQgOTZsMCAzMjAgMjI0IDAgMC0zMjBMMjI0IDk2em0tNjQgMEw2NCA5NmwwIDQ4IDk2IDAgMC00OHpNNjQgMTkybDAgNDggOTYgMCAwLTQ4LTk2IDB6bTk2IDk2bC05NiAwIDAgNDggOTYgMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM224 96l0 320 224 0 0-320L224 96zm-64 0L64 96l0 48 96 0 0-48zM64 192l0 48 96 0 0-48-96 0zm96 96l-96 0 0 48 96 0 0-48z" />
    </Icon>
);

export default Sidebar;