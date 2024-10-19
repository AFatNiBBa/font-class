
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=sharp-solid filter}
 * @preview ![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDQxNlYzMjBMMCA5NlYzMkg1MTJWOTZMMzIwIDMyMFY1MTJMMTkyIDQxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416V320L0 96V32H512V96L320 320V512L192 416z" />
    </Icon>
);

export default Filter;