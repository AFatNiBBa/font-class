
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=sharp-duotone-solid cart-flatbed}
 * @preview ![cart-flatbed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNDY0YzAtNS42IDEtMTEgMi43LTE2bDkwLjUgMGMxLjggNSAyLjcgMTAuNCAyLjcgMTZjMCAyNi41LTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDh6TTE5MiAzMmwxNDQgMCAwIDE2MCA2NC00OCA2NCA0OCAwLTE2MCAxNDQgMCAwIDI4OC00MTYgMCAwLTI4OHpNNDQ4IDQ2NGMwLTUuNiAxLTExIDIuNy0xNmw5MC41IDBjMS44IDUgMi43IDEwLjQgMi43IDE2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMEwwIDAgMCA2NGwzMiAwIDMyIDAgMCAzNTIgMCAzMiAzMiAwIDUxMiAwIDMyIDAgMC02NC0zMiAwLTQ4MCAwIDAtMzUyIDAtMzJMOTYgMCAzMiAwek0zMzYgMTkybDY0LTQ4IDY0IDQ4IDAtMTYwTDMzNiAzMmwwIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zM192 32l144 0 0 160 64-48 64 48 0-160 144 0 0 288-416 0 0-288zM448 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
            <path d="M32 0L0 0 0 64l32 0 32 0 0 352 0 32 32 0 512 0 32 0 0-64-32 0-480 0 0-352 0-32L96 0 32 0zM336 192l64-48 64 48 0-160L336 32l0 160z" />
    </Icon>
);

export default CartFlatbed;