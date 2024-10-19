
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=sharp-light pi}
 * @preview ![pi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNjRMMCA2NCAwIDk2bDE2IDAgMTEyIDAgMCAyNTAuNEw2Ny41IDQyMmwyNSAyMCA2NC04MCAzLjUtNC40IDAtNS42IDAtMjU2IDE2MCAwIDAgMzM2IDAgMTYgMTYgMCA4MCAwIDEwLjggMCA0LTEwLjEgMTYtNDAtMjkuNy0xMS45LTEyIDI5LjlMMzUyIDQxNmwwLTMyMCA4MCAwIDE2IDAgMC0zMi0xNiAwTDE2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 64L0 64 0 96l16 0 112 0 0 250.4L67.5 422l25 20 64-80 3.5-4.4 0-5.6 0-256 160 0 0 336 0 16 16 0 80 0 10.8 0 4-10.1 16-40-29.7-11.9-12 29.9L352 416l0-320 80 0 16 0 0-32-16 0L16 64z" />
    </Icon>
);

export default Pi;