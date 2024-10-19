
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-solid sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMzZMMTYwIDQ4MCAzMjAgMzM2VjI4OEgwdjQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 336L160 480 320 336V288H0v48z" />
    </Icon>
);

export default SortDown;