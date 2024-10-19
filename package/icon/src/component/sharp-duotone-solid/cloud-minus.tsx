
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-minus?s=sharp-duotone-solid cloud-minus}
 * @preview ![cloud-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNkwwIDQ4MGwxNDQgMCAzNjggMCAxMjggMCAwLTEyOGMwLTU5LjYtNDAuOC0xMDkuOC05Ni0xMjRsMC0zNmMwLTUzLTQzLTk2LTk2LTk2Yy0xOS43IDAtMzguMSA2LTUzLjMgMTYuMkMzNjcgNjQuMiAzMTUuMyAzMiAyNTYgMzJDMTY3LjYgMzIgOTYgMTAzLjYgOTYgMTkybDAgOC4yQzQwLjEgMjIwIDAgMjczLjMgMCAzMzZ6bTIyNC03MmwyNCAwIDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAyNjRsMjQgMCAxNDQgMCAyNCAwIDAgNDgtMjQgMC0xNDQgMC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CloudMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zm224-72l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
            <path d="M224 264l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default CloudMinus;