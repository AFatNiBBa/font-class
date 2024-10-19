
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=sharp-duotone-solid person}
 * @preview ![person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgNDhhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEwOC45IDEyOGwtMTcuNSAwTDgyIDE0Mi44IC4yIDI3MC44bDUzLjkgMzQuNCAzMy44LTUzTDg4IDQ4MGwwIDMyIDY0IDAgMC0zMiAwLTEyOCAxNiAwIDAgMTI4IDAgMzIgNjQgMCAwLTMyIDAtMjI3LjggMzMuOCA1MyA1My45LTM0LjRMMjM4IDE0Mi44IDIyOC42IDEyOGwtMTcuNSAwLTEwMi4yIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Person: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M108.9 128l-17.5 0L82 142.8 .2 270.8l53.9 34.4 33.8-53L88 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 53.9-34.4L238 142.8 228.6 128l-17.5 0-102.2 0z" />
    </Icon>
);

export default Person;