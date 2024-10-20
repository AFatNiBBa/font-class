
import { Icon } from "../../index";

/**
 * A component that renders the `grip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=sharp-solid grip}
 * @preview ![grip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grip.svg)
 */
const Grip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 96L0 96 0 224l128 0 0-128zm0 192L0 288 0 416l128 0 0-128zM160 96l0 128 128 0 0-128L160 96zM288 288l-128 0 0 128 128 0 0-128zM320 96l0 128 128 0 0-128L320 96zM448 288l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default Grip;