
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-regular wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgMzJMMCAzMiAwIDU2IDAgNDU2bDAgMjQgMjQgMCA0NjQgMCAyNCAwIDAtMjQgMC0zMDQgMC0yNC0yNCAwLTM2OCAwLTI0IDAgMCA0OCAyNCAwIDM0NCAwIDAgMjU2TDQ4IDQzMiA0OCA4MGw0MDggMCAyNCAwIDAtNDgtMjQgMEwyNCAzMnpNMzg0IDMzNmEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-24 0-304 0-24-24 0-368 0-24 0 0 48 24 0 344 0 0 256L48 432 48 80l408 0 24 0 0-48-24 0L24 32zM384 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Wallet;