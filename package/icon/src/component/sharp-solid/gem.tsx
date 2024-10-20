
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-solid gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208L256 480 512 208 400 32 112 32 0 208zM376 64L299.6 189 464 208 256 232 48 208l164.4-19L136 64 256 177.7 376 64z" />
    </Icon>
);

export default Gem;