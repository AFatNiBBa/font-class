
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-duotone-solid clone}
 * @preview ![clone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwwIDY0TDAgNDQ4bDAgNjQgNjQgMCAyMjQgMCA2NCAwIDAtNjQgMC05Ni02NCAwIDAgOTZMNjQgNDQ4bDAtMjI0IDk2IDAgMC02NC05NiAwTDAgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDM1Mkg1MTJWMEgxNjBWMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l0 64L0 448l0 64 64 0 224 0 64 0 0-64 0-96-64 0 0 96L64 448l0-224 96 0 0-64-96 0L0 160z" />
            <path d="M160 352H512V0H160V352z" />
    </Icon>
);

export default Clone;