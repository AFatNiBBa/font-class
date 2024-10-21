
import { Icon } from "../../index";

/**
 * A component that renders the `grip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=sharp-light grip}
 * @preview ![grip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/grip.svg)
 */
const Grip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 384l0-64-64 0 0 64 64 0zm32 32l-32 0-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32zM416 192l0-64-64 0 0 64 64 0zm32 32l-32 0-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32zM192 384l64 0 0-64-64 0 0 64zm64 32l-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32-32 0zm0-224l0-64-64 0 0 64 64 0zm32 32l-32 0-64 0-32 0 0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32zM32 384l64 0 0-64-64 0 0 64zm64 32l-64 0L0 416l0-32 0-64 0-32 32 0 64 0 32 0 0 32 0 64 0 32-32 0zm0-224l0-64-64 0 0 64 64 0zm32 32l-32 0-64 0L0 224l0-32 0-64L0 96l32 0 64 0 32 0 0 32 0 64 0 32z" />
    </Icon>
);

export default Grip;