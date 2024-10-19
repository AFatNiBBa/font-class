
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=sharp-regular square-envelope}
 * @preview ![square-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggODBsMCAzNTIgMzUyIDAgMC0zNTJMNDggODB6TTAgMzJsNDggMCAzNTIgMCA0OCAwIDAgNDggMCAzNTIgMCA0OC00OCAwTDQ4IDQ4MCAwIDQ4MGwwLTQ4TDAgODAgMCAzMnpNOTYgMTYwbDI1NiAwIDAgMjguMkwyMjQgMjU1LjQgOTYgMTg4LjIgOTYgMTYwek0yMzEuNCAyODcuNkwzNTIgMjI0LjMgMzUyIDM1MiA5NiAzNTJsMC0xMjcuNyAxMjAuNiA2My4zIDcuNCAzLjkgNy40LTMuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM96 160l256 0 0 28.2L224 255.4 96 188.2 96 160zM231.4 287.6L352 224.3 352 352 96 352l0-127.7 120.6 63.3 7.4 3.9 7.4-3.9z" />
    </Icon>
);

export default SquareEnvelope;