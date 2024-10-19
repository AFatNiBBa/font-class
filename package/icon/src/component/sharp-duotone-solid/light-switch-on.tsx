
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-on?s=sharp-duotone-solid light-switch-on}
 * @preview ![light-switch-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwwIDE2MCAxOTIgMCAwLTE2MEw5NiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEwzODQgMGwwIDUxMkwwIDUxMiAwIDB6TTk2IDQxNmwxOTIgMCAwLTMyMEw5NiA5NmwwIDMyMHpNMjA4IDQ4YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6bTAgNDE2YTE2IDE2IDAgMSAwIC0zMiAwIDE2IDE2IDAgMSAwIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const LightSwitchOn: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 96l0 160 192 0 0-160L96 96z" />
            <path d="M0 0L384 0l0 512L0 512 0 0zM96 416l192 0 0-320L96 96l0 320zM208 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default LightSwitchOn;