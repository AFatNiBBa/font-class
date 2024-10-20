
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-solid suitcase}
 * @preview ![suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/suitcase.svg)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72 0 32 0 352 256 0 0-352 0-32 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM0 96L0 480l96 0L96 96 0 96zM512 480l0-384-96 0 0 384 96 0z" />
    </Icon>
);

export default Suitcase;