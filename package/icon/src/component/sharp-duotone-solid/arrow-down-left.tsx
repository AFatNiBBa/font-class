
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=sharp-duotone-solid arrow-down-left}
 * @preview ![arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMDYuN0wyOTcuNCAxMDUuNCAzMjAgODIuNyAzNjUuMyAxMjhsLTIyLjYgMjIuNkwxNDEuMyAzNTIgOTYgMzUybDAtNDUuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDQxNmwzMiAwIDIyNCAwIDMyIDAgMC02NC0zMiAwTDk2IDM1MmwwLTE5MiAwLTMyLTY0IDAgMCAzMiAwIDIyNCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 306.7L297.4 105.4 320 82.7 365.3 128l-22.6 22.6L141.3 352 96 352l0-45.3z" />
            <path d="M32 416l32 0 224 0 32 0 0-64-32 0L96 352l0-192 0-32-64 0 0 32 0 224 0 32z" />
    </Icon>
);

export default ArrowDownLeft;