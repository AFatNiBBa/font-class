
import { Icon } from "../../index";

/**
 * A component that renders the `shop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=sharp-solid shop}
 * @preview ![shop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxOTJsNjQwIDAgMC02NEw1NDQgMCA5NiAwIDAgMTI4bDAgNjR6TTY0IDM4NGwwIDEyOCAzMjAgMCAwLTEyOCAwLTE2MC02NCAwIDAgMTYwLTE5MiAwIDAtMTYwLTY0IDAgMCAxNjB6TTUxMiA1MTJsNjQgMCAwLTI4OC02NCAwIDAgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 192l640 0 0-64L544 0 96 0 0 128l0 64zM64 384l0 128 320 0 0-128 0-160-64 0 0 160-192 0 0-160-64 0 0 160zM512 512l64 0 0-288-64 0 0 288z" />
    </Icon>
);

export default Shop;