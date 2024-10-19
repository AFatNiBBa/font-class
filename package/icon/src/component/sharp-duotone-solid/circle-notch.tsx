
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=sharp-duotone-solid circle-notch}
 * @preview ![circle-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDEuMSA3MS45QzEyMS44IDk1LjYgNjQgMTY5LjEgNjQgMjU2YzAgMTA2IDg2IDE5MiAxOTIgMTkyczE5Mi04NiAxOTItMTkyYzAtODYuOS01Ny44LTE2MC40LTEzNy4xLTE4NC4xbDE4LjMtNjEuM0M0MzQuOSA0Mi4xIDUxMiAxNDAgNTEyIDI1NmMwIDE0MS40LTExNC42IDI1Ni0yNTYgMjU2UzAgMzk3LjQgMCAyNTZDMCAxNDAgNzcuMSA0Mi4xIDE4Mi45IDEwLjZsMTguMyA2MS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M201.1 71.9C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1l18.3-61.3C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6l18.3 61.3z" />
    </Icon>
);

export default CircleNotch;