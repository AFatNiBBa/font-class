
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-duotone-solid money-check}
 * @preview ![money-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDU3NiAwIDAtMzg0TDAgNjR6TTk2IDIyNGwyMjQgMCAwIDMyTDk2IDI1NmwwLTMyem0wIDk2bDM4NCAwIDAgMzJMOTYgMzUybDAtMzJ6TTM4NCAxNjBsOTYgMCAwIDk2LTk2IDAgMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4MCAxNjBsLTk2IDAgMCA5NiA5NiAwIDAtOTZ6TTMyMCAyMjRMOTYgMjI0bDAgMzIgMjI0IDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zM96 224l224 0 0 32L96 256l0-32zm0 96l384 0 0 32L96 352l0-32zM384 160l96 0 0 96-96 0 0-96z" />
            <path d="M480 160l-96 0 0 96 96 0 0-96zM320 224L96 224l0 32 224 0 0-32z" />
    </Icon>
);

export default MoneyCheck;