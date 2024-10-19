
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=sharp-duotone-solid lamp}
 * @preview ![lamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0MzJjMCA0OCAzMiA4MCAzMiA4MGwxOTIgMHMzMi0zMiAzMi04MGMwLTYxLjUtNjQtMTI4LTY0LTEyOGwwLTQ4LTEyOCAwIDAgNDhzLTY0IDY2LjUtNjQgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyNTZMOTYgMEgzNTJsOTYgMjU2SDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 432c0 48 32 80 32 80l192 0s32-32 32-80c0-61.5-64-128-64-128l0-48-128 0 0 48s-64 66.5-64 128z" />
            <path d="M0 256L96 0H352l96 256H0z" />
    </Icon>
);

export default Lamp;