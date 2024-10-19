
import { Icon, generic } from "../../index";

/**
 * A component that renders the `faucet-drip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet-drip?s=sharp-duotone-solid faucet-drip}
 * @preview ![faucet-drip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDMyMGwxMzIuMSAwYzIwLjIgMjkgNTMuOSA0OCA5MS45IDQ4czcxLjctMTkgOTEuOS00OGwzNi4xIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzMiAxMjggMCAwLTMyYzAtODguNC03MS42LTE2MC0xNjAtMTYwbC0zMiAwLTMyLTMyLTMyIDAgMC03Ni44TDIyNCA4MGwtMzIgMy4yIDAgNzYuOC0zMiAwLTMyIDMyTDAgMTkyek0xOTIgMGwwIDQ0LjhMMjI0IDQ4bDMyLTMuMkwyNTYgMCAxOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA4MEw2NCA5NmwwLTY0TDIyNCA0OCAzODQgMzJsMCA2NEwyMjQgODB6TTQ0OCA0MTZsMjcuOCA0OC43YzIuNyA0LjggNC4yIDEwLjIgNC4yIDE1LjdjMCAxNy41LTE0LjIgMzEuNi0zMS42IDMxLjZsLS44IDBjLTE3LjUgMC0zMS42LTE0LjItMzEuNi0zMS42YzAtNS41IDEuNC0xMC45IDQuMi0xNS43TDQ0OCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaucetDrip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192L0 320l132.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-88.4-71.6-160-160-160l-32 0-32-32-32 0 0-76.8L224 80l-32 3.2 0 76.8-32 0-32 32L0 192zM192 0l0 44.8L224 48l32-3.2L256 0 192 0z" />
            <path d="M224 80L64 96l0-64L224 48 384 32l0 64L224 80zM448 416l27.8 48.7c2.7 4.8 4.2 10.2 4.2 15.7c0 17.5-14.2 31.6-31.6 31.6l-.8 0c-17.5 0-31.6-14.2-31.6-31.6c0-5.5 1.4-10.9 4.2-15.7L448 416z" />
    </Icon>
);

export default FaucetDrip;