
import { Icon } from "../../index";

/**
 * A component that renders the `cabin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=sharp-regular cabin}
 * @preview ![cabin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cabin.svg)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 58.2L427.3 176 84.7 176 256 58.2zM432 121L256 0 0 176l0 48 48 0 416 0 48 0 0-48-32-22 0-122-48 0 0 89zM32 272l0 48 160 0 0-48L32 272zm0 192l0 48 160 0 0-48L32 464zm160-96L32 368l0 48 160 0 0-48zm128-96l0 48 160 0 0-48-160 0zM480 464l-160 0 0 48 160 0 0-48zM320 368l0 48 160 0 0-48-160 0zM256 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Cabin;