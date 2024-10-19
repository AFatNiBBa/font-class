
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=sharp-duotone-solid skull}
 * @preview ![skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGMwIDcwLjcgMzcuNSAxMzMuOCA5NiAxNzQuOUw5NiA1MTJsOTYgMCAwLTQ4IDAtMTYgMzIgMCAwIDE2IDAgNDggNjQgMCAwLTQ4IDAtMTYgMzIgMCAwIDE2IDAgNDggOTYgMCAwLTExMy4xYzU4LjUtNDEuMSA5Ni0xMDQuMSA5Ni0xNzQuOUM1MTIgMTAwLjMgMzk3LjQgMCAyNTYgMFMwIDEwMC4zIDAgMjI0em0yMjQgMzJBNjQgNjQgMCAxIDEgOTYgMjU2YTY0IDY0IDAgMSAxIDEyOCAwem0xOTIgMGE2NCA2NCAwIDEgMSAtMTI4IDAgNjQgNjQgMCAxIDEgMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzIwYTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4em0xOTIgMGE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224c0 70.7 37.5 133.8 96 174.9L96 512l96 0 0-48 0-16 32 0 0 16 0 48 64 0 0-48 0-16 32 0 0 16 0 48 96 0 0-113.1c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224zm224 32A64 64 0 1 1 96 256a64 64 0 1 1 128 0zm192 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm192 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Skull;