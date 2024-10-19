
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-solid tarp}
 * @preview ![tarp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDI4OGwwLTIyNEwwIDY0IDAgNDQ4bDQxNiAwIDAtMTYwIDE2MCAwem0wIDMybC0xMjggMCAwIDEyOEw1NzYgMzIwek05NiAxMjhhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 288l0-224L0 64 0 448l416 0 0-160 160 0zm0 32l-128 0 0 128L576 320zM96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Tarp;