
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-solid wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDMyTDAgMzIgMCA0ODBsNTEyIDAgMC0zNTJMNjQgMTI4bDAtMzIgNDE2IDAgMC02NHpNNDE2IDI3MmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32L0 32 0 480l512 0 0-352L64 128l0-32 416 0 0-64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Wallet;