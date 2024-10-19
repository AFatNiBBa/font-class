
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=sharp-thin heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4MGwwLTIyLjZMMjU2IDk2IDIzMS44IDcxLjhjLTI1LjUtMjUuNS02MC0zOS44LTk2LTM5LjhDNjAuOCAzMiAwIDkyLjggMCAxNjcuOGMwIDM2IDE0LjMgNzAuNSAzOS44IDk2TDI0MCA0NjRsMTYgMTZ6bS0xNi0zOC42TDUxLjEgMjUyLjVDMjguNiAyMzAgMTYgMTk5LjUgMTYgMTY3LjhDMTYgMTAxLjYgNjkuNiA0OCAxMzUuOCA0OGMzMS44IDAgNjIuMiAxMi42IDg0LjcgMzUuMUwyNDAgMTAyLjZsMCAzMzguN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480l0-22.6L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L240 464l16 16zm-16-38.6L51.1 252.5C28.6 230 16 199.5 16 167.8C16 101.6 69.6 48 135.8 48c31.8 0 62.2 12.6 84.7 35.1L240 102.6l0 338.7z" />
    </Icon>
);

export default HeartHalf;