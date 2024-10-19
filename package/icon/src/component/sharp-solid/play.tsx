
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=sharp-solid play}
 * @preview ![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDI1NkwwIDMyVjQ4MEwzODQgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 256L0 32V480L384 256z" />
    </Icon>
);

export default Play;