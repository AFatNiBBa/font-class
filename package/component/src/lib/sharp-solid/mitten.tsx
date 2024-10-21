
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=sharp-solid mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 384L64 384 5.4 178.9C1.8 166.4 0 153.4 0 140.3C0 62.8 62.8 0 140.3 0l3.4 0c66 0 123.5 44.9 139.5 108.9l33.6 134.3L368 192l80 80L352 384zM32 416l352 0 0 96L32 512l0-96z" />
    </Icon>
);

export default Mitten;