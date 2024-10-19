
import { Icon } from "../../index";

/**
 * A component that renders the `album` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album?s=sharp-solid album}
 * @preview ![album](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw0NDggMCAwIDQ0OEwwIDQ4MCAwIDMyek0zODQgMjU2QTE2MCAxNjAgMCAxIDAgNjQgMjU2YTE2MCAxNjAgMCAxIDAgMzIwIDB6TTIyNCAyMjRhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Album: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 448L0 480 0 32zM384 256A160 160 0 1 0 64 256a160 160 0 1 0 320 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Album;