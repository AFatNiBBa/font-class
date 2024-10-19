
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-puck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=sharp-duotone-solid hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGMwIDUzIDExNC42IDk2IDI1NiA5NnMyNTYtNDMgMjU2LTk2cy0xMTQuNi05Ni0yNTYtOTZTMCAxMDcgMCAxNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMjU2YzE0MS40IDAgMjU2LTQzIDI1Ni05NmwwIDE5MmMwIDUzLTExNC42IDk2LTI1NiA5NlMwIDQwNSAwIDM1MkwwIDE2MGMwIDUzIDExNC42IDk2IDI1NiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HockeyPuck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0 53 114.6 96 256 96s256-43 256-96s-114.6-96-256-96S0 107 0 160z" />
            <path d="M256 256c141.4 0 256-43 256-96l0 192c0 53-114.6 96-256 96S0 405 0 352L0 160c0 53 114.6 96 256 96z" />
    </Icon>
);

export default HockeyPuck;