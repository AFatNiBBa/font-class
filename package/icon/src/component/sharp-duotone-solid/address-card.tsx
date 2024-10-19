
import { Icon, generic } from "../../index";

/**
 * A component that renders the `address-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-card?s=sharp-duotone-solid address-card}
 * @preview ![address-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDU3NiAwIDAtNDQ4TDAgMzJ6TTY0IDM4NGwzMi05NiAxNjAgMCAzMiA5Nkw2NCAzODR6TTI0MCAxOTJhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAwem0xMTItMzJsMTYgMCAxMjggMCAxNiAwIDAgMzItMTYgMC0xMjggMC0xNiAwIDAtMzJ6bTAgNjRsMTYgMCAxMjggMCAxNiAwIDAgMzItMTYgMC0xMjggMC0xNiAwIDAtMzJ6bTAgNjRsMTYgMCAxMjggMCAxNiAwIDAgMzItMTYgMC0xMjggMC0xNiAwIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMTI4YTY0IDY0IDAgMSAxIDAgMTI4IDY0IDY0IDAgMSAxIDAtMTI4ek02NCAzODRsMzItOTYgMTYwIDAgMzIgOTZMNjQgMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AddressCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM64 384l32-96 160 0 32 96L64 384zM240 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm112-32l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
            <path d="M176 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM64 384l32-96 160 0 32 96L64 384z" />
    </Icon>
);

export default AddressCard;