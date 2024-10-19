
import { Icon } from "../../index";

/**
 * A component that renders the `ethereum` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ethereum?s=brands ethereum}
 * @preview ![ethereum](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTEuOSAyNjAuOEwxNjAgMzUzLjYgOCAyNjAuOCAxNjAgMGwxNTEuOSAyNjAuOHpNMTYwIDM4My40TDggMjkwLjYgMTYwIDUxMmwxNTItMjIxLjQtMTUyIDkyLjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Ethereum: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
    </Icon>
);

export default Ethereum;