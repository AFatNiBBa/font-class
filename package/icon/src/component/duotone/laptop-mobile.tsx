
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=duotone laptop-mobile}
 * @preview ![laptop-mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwNy4yQzAgMzQ5LjYgMzQuNCAzODQgNzYuOCAzODRMMzUyIDM4NGwwLTk2LTIyNCAwIDAtMjI0IDMyMCAwIDAgMzIgNjQgMCAwLTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0TDEyOCAwQzkyLjcgMCA2NCAyOC43IDY0IDY0bDAgMjI0LTQ0LjggMEM4LjYgMjg4IDAgMjk2LjYgMCAzMDcuMnpNNDQ4IDE5MmwwIDI1NiAxMjggMCAwLTI1Ni0xMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAxOTJsMTI4IDAgMCAyNTYtMTI4IDAgMC0yNTZ6bS0xNi02NGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhsMCAyODhjMCAyNi41IDIxLjUgNDggNDggNDhsMTYwIDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC0yODhjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTE2MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 307.2C0 349.6 34.4 384 76.8 384L352 384l0-96-224 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2zM448 192l0 256 128 0 0-256-128 0z" />
            <path d="M448 192l128 0 0 256-128 0 0-256zm-16-64c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-160 0z" />
    </Icon>
);

export default LaptopMobile;