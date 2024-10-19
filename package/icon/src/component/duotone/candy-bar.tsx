
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=duotone candy-bar}
 * @preview ![candy-bar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggNjRsMjg4IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAyNTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTI4OCAwIDAtOTYgMC0zMiAwLTk2IDAtMzIgMC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDIyNGwwIDk2IDEyOCAwIDAtOTZMMCAyMjR6TTAgMzUybDAgMzJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsNjQgMCAwLTk2TDAgMzUyem0xNjAgOTZsMTI4IDAgMC05Ni0xMjggMCAwIDk2ek0yODggMzIwbDAtOTYtMTI4IDAgMCA5NiAxMjggMHptMC0xMjhsMC0xMjhMMTYwIDY0bDAgMTI4IDEyOCAwek00NC4yIDE5Mkw5NiAxOTJzMCAwIDAgMGwzMiAwIDAtMzJzMCAwIDAgMGwwLTUxLjhjMC03LjEtOS0xMS4xLTE1LTcuNEMxMDEgMTA3LjkgODcgMTEyIDcyIDExMmMtNCAwLTcuOS0uMy0xMS43LS45Yy03LTEtMTQuMiA2LjItMTMuMSAxMy4xYy42IDMuOCAuOSA3LjcgLjkgMTEuN2MwIDE1LTQuMSAyOS0xMS4zIDQxYy0zLjYgNi4xIC40IDE1IDcuNCAxNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 64l288 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-288 0 0-96 0-32 0-96 0-32 0-128z" />
            <path d="M0 224l0 96 128 0 0-96L0 224zM0 352l0 32c0 35.3 28.7 64 64 64l64 0 0-96L0 352zm160 96l128 0 0-96-128 0 0 96zM288 320l0-96-128 0 0 96 128 0zm0-128l0-128L160 64l0 128 128 0zM44.2 192L96 192s0 0 0 0l32 0 0-32s0 0 0 0l0-51.8c0-7.1-9-11.1-15-7.4C101 107.9 87 112 72 112c-4 0-7.9-.3-11.7-.9c-7-1-14.2 6.2-13.1 13.1c.6 3.8 .9 7.7 .9 11.7c0 15-4.1 29-11.3 41c-3.6 6.1 .4 15 7.4 15z" />
    </Icon>
);

export default CandyBar;