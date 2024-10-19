
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=duotone cart-flatbed}
 * @preview ![cart-flatbed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiAzMkg0NDhWMTYwTDQwMCAxMjhMMzUyIDE2MFYzMkgyMjRDMjA2LjQgMzIgMTkyIDQ2LjQgMTkyIDY0VjI4OEMxOTIgMzA1LjYgMjA2LjQgMzIwIDIyNCAzMjBINTc2QzU5My42IDMyMCA2MDggMzA1LjYgNjA4IDI4OFY2NEM2MDggNDYuNCA1OTMuNiAzMiA1NzYgMzJaTTE2Mi44NzUgNDQ4QzE2MS4xMjUgNDUzIDE2MCA0NTguMzc1IDE2MCA0NjRDMTYwIDQ5MC41IDE4MS41IDUxMiAyMDggNTEyUzI1NiA0OTAuNSAyNTYgNDY0QzI1NiA0NTguMzc1IDI1NC43NSA0NTMgMjUzLjEyNSA0NDhIMTYyLjg3NVpNNDUxIDQ0OEM0NDkuMjUgNDUzIDQ0OC4xMjUgNDU4LjM3NSA0NDguMTI1IDQ2NEM0NDguMTI1IDQ5MC41IDQ2OS42MjUgNTEyIDQ5Ni4xMjUgNTEyUzU0NC4xMjUgNDkwLjUgNTQ0LjEyNSA0NjRDNTQ0LjEyNSA0NTguMzc1IDU0Mi44NzUgNDUzIDU0MS4yNSA0NDhINDUxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMzJWMTYwTDQwMCAxMjhMMzUyIDE2MFYzMkg0NDhaTTYyNCAzODRIMTI4VjY0QzEyOCAyOC44IDk5LjIgMCA2NCAwSDE2QzcuMiAwIDAgNy4yIDAgMTZWNDhDMCA1Ni44IDcuMiA2NCAxNiA2NEg0OEM1Ni44MzcgNjQgNjQgNzEuMTYzIDY0IDgwVjQzMkM2NCA0NDAuOCA3MS4yIDQ0OCA4MCA0NDhINjI0QzYzMi44IDQ0OCA2NDAgNDQwLjggNjQwIDQzMlY0MDBDNjQwIDM5MS4yIDYzMi44IDM4NCA2MjQgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 32H448V160L400 128L352 160V32H224C206.4 32 192 46.4 192 64V288C192 305.6 206.4 320 224 320H576C593.6 320 608 305.6 608 288V64C608 46.4 593.6 32 576 32ZM162.875 448C161.125 453 160 458.375 160 464C160 490.5 181.5 512 208 512S256 490.5 256 464C256 458.375 254.75 453 253.125 448H162.875ZM451 448C449.25 453 448.125 458.375 448.125 464C448.125 490.5 469.625 512 496.125 512S544.125 490.5 544.125 464C544.125 458.375 542.875 453 541.25 448H451Z" />
            <path d="M448 32V160L400 128L352 160V32H448ZM624 384H128V64C128 28.8 99.2 0 64 0H16C7.2 0 0 7.2 0 16V48C0 56.8 7.2 64 16 64H48C56.837 64 64 71.163 64 80V432C64 440.8 71.2 448 80 448H624C632.8 448 640 440.8 640 432V400C640 391.2 632.8 384 624 384Z" />
    </Icon>
);

export default CartFlatbed;