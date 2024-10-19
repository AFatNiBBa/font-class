
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=solid box}
 * @preview ![box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAuNyA1OC41TDAgMTYwbDIwOCAwIDAtMTI4TDkzLjcgMzJDNzUuNSAzMiA1OC45IDQyLjMgNTAuNyA1OC41ek0yNDAgMTYwbDIwOCAwTDM5Ny4zIDU4LjVDMzg5LjEgNDIuMyAzNzIuNSAzMiAzNTQuMyAzMkwyNDAgMzJsMCAxMjh6bTIwOCAzMkwwIDE5MiAwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMjAgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z" />
    </Icon>
);

export default Box;