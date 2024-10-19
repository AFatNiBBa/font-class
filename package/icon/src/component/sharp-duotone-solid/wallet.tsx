
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-duotone-solid wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDAgOTYgNDgwIDAgMC05NkwwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDEyOEwwIDEyOCAwIDQ4MGw1MTIgMCAwLTM1MnpNNDE2IDI3MmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l0 96 480 0 0-96L0 32z" />
            <path d="M512 128L0 128 0 480l512 0 0-352zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Wallet;