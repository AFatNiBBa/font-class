
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=sharp-duotone-solid toggle-large-on}
 * @preview ![toggle-large-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDU3NiAwIDAtMzg0TDAgNjR6bTI1NiA2NGwyNTYgMCAwIDI1Ni0yNTYgMCAwLTI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxMjhoMjU2djI1NkgyNTZWMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zm256 64l256 0 0 256-256 0 0-256z" />
            <path d="M256 128h256v256H256V128z" />
    </Icon>
);

export default ToggleLargeOn;