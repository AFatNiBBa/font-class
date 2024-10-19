
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=duotone laptop-file}
 * @preview ![laptop-file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwNy4yQzAgMzQ5LjYgMzQuNCAzODQgNzYuOCAzODRMMzIwIDM4NGwwLTk2LTE5MiAwIDAtMjI0IDMyMCAwIDAgMzIgNjQgMCAwLTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0TDEyOCAwQzkyLjcgMCA2NCAyOC43IDY0IDY0bDAgMjI0LTQ0LjggMEM4LjYgMjg4IDAgMjk2LjYgMCAzMDcuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQwMCAxMjhsMTEyIDAgMCA5NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmw5NiAwIDAgMjA4YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4bC0xOTIgMGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhsMC0yODhjMC0yNi41IDIxLjUtNDggNDgtNDh6bTI0MCA5NmwtOTYgMCAwLTk2IDk2IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2z" />
            <path d="M400 128l112 0 0 96c0 17.7 14.3 32 32 32l96 0 0 208c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zm240 96l-96 0 0-96 96 96z" />
    </Icon>
);

export default LaptopFile;