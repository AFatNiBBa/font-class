
import { Icon } from "../../index";

/**
 * A component that renders the `soap` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=sharp-solid soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 160c0 24.6-9.2 47-24.4 64l24.4 0 32 0 0 32 0 128 0 32-32 0L96 448l-32 0 0-32 0-128 0-32 32 0 152.4 0c-15.2-17-24.4-39.4-24.4-64L0 192 0 512l512 0 0-320-96 0zM96 416l320 0 0-128-96 0L96 288l0 128z" />
    </Icon>
);

export default Soap;