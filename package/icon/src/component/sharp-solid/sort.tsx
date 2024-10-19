
import { Icon } from "../../index";

/**
 * A component that renders the `sort` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=sharp-solid sort}
 * @preview ![sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDMyTDAgMTkybDAgMzIgMzIwIDAgMC0zMkwxNjAgMzJ6bTAgNDQ4TDMyMCAzMjBsMC0zMkwwIDI4OGwwIDMyTDE2MCA0ODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 32L0 192l0 32 320 0 0-32L160 32zm0 448L320 320l0-32L0 288l0 32L160 480z" />
    </Icon>
);

export default Sort;