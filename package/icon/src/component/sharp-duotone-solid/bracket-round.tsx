
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bracket-round` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=sharp-duotone-solid bracket-round}
 * @preview ![bracket-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDE0MC4yIDcxLjkgNjIuOSAxMTAuMiAzNy40bDM1LjUgNTMuM0MxMjAuMSAxMDcuNyA2NCAxNjcgNjQgMjU2czU2LjEgMTQ4LjMgODEuOCAxNjUuNGwtMzUuNSA1My4zQzcxLjkgNDQ5IDAgMzcxLjggMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BracketRound: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 140.2 71.9 62.9 110.2 37.4l35.5 53.3C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4l-35.5 53.3C71.9 449 0 371.8 0 256z" />
    </Icon>
);

export default BracketRound;