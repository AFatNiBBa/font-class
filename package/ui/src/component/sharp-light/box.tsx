
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=sharp-light box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M84.8 64L208 64l0 96L42.1 160 84.8 64zM240 192l176 0 0 256L32 448l0-256 176 0 32 0zm165.9-32L240 160l0-96 123.2 0 42.7 96zM384 32L64 32 0 176 0 448l0 32 32 0 384 0 32 0 0-32 0-272L384 32z" />
    </Icon>
);

export default Box;