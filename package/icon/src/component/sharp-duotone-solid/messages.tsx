
import { Icon, generic } from "../../index";

/**
 * A component that renders the `messages` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=sharp-duotone-solid messages}
 * @preview ![messages](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMzUybDAgOTYgMTgxLjMgMEw1NDQgNTEybDAtNjQgOTYgMCAwLTMyMC0xOTIgMCAwIDIyNC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxNiAwTDAgMCAwIDMyMGw5NiAwIDAgNjQgMTA2LjctNjRMNDE2IDMyMCA0MTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 352l0 96 181.3 0L544 512l0-64 96 0 0-320-192 0 0 224-192 0z" />
            <path d="M416 0L0 0 0 320l96 0 0 64 106.7-64L416 320 416 0z" />
    </Icon>
);

export default Messages;