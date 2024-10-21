
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-duotone-solid gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208L112 32l288 0L512 208 256 480 0 208zm48 0l208 24 208-24L299.6 189 376 64 256 177.7 136 64l76.4 125L48 208z" />
        <path d="M256 177.7L376 64 299.6 189 464 208 256 232 48 208l164.4-19L136 64 256 177.7z" />
    </Icon>
);

export default Gem;