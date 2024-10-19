
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane?s=sharp-duotone-solid plane}
 * @preview ![plane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMGw1NC45IDE5MiAxNTAuOSAwTDI1NiAwIDE2MCAwem0wIDUxMmw5NiAwTDM2NS43IDMyMGwtMTUwLjkgMEwxNjAgNTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDgyLjMgMTkyYzM0LjIgMCA5My43IDI5IDkzLjcgNjRjMCAzNi01OS41IDY0LTkzLjcgNjRMMTEyIDMyMCA2NCAzODQgMCAzODQgMzIgMjU2IDAgMTI4bDY0IDAgNDggNjQgMzcwLjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Plane: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 0l54.9 192 150.9 0L256 0 160 0zm0 512l96 0L365.7 320l-150.9 0L160 512z" />
            <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L112 320 64 384 0 384 32 256 0 128l64 0 48 64 370.3 0z" />
    </Icon>
);

export default Plane;