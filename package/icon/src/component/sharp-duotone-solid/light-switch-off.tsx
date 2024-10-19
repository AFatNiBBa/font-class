
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=sharp-duotone-solid light-switch-off}
 * @preview ![light-switch-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyNTZsMCAxNjAgMTkyIDAgMC0xNjBMOTYgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA1MTJsMzg0IDBMMzg0IDAgMCAwIDAgNTEyek05NiA5NmwxOTIgMCAwIDMyMEw5NiA0MTYgOTYgOTZ6bTgwIDM2OGExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwem0wLTQxNmExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 256l0 160 192 0 0-160L96 256z" />
            <path d="M0 512l384 0L384 0 0 0 0 512zM96 96l192 0 0 320L96 416 96 96zm80 368a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0-416a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default LightSwitchOff;