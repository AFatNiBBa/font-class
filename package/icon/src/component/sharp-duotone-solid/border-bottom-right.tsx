
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=sharp-duotone-solid border-bottom-right}
 * @preview ![border-bottom-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsNjQgMCAwLTY0TDAgMzJ6bTAgOTZsMCA2NCA2NCAwIDAtNjRMMCAxMjh6bTAgOTZsMCA2NCA2NCAwIDAtNjRMMCAyMjR6bTAgOTZsMCA2NCA2NCAwIDAtNjRMMCAzMjB6TTk2IDMybDAgNjQgNjQgMCAwLTY0TDk2IDMyem05NiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6bTk2IDBsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAzMmwwIDMyIDAgMzg0IDAgMzItMzIgMEwzMiA0ODAgMCA0ODBsMC02NCAzMiAwIDM1MiAwIDAtMzUyIDAtMzIgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l64 0 0-64L0 32zm0 96l0 64 64 0 0-64L0 128zm0 96l0 64 64 0 0-64L0 224zm0 96l0 64 64 0 0-64L0 320zM96 32l0 64 64 0 0-64L96 32zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
            <path d="M448 32l0 32 0 384 0 32-32 0L32 480 0 480l0-64 32 0 352 0 0-352 0-32 64 0z" />
    </Icon>
);

export default BorderBottomRight;