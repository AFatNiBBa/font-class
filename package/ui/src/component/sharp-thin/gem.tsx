
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-thin gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267 468.3L256 480l-11-11.7L0 208 112 32l288 0L512 208 267 468.3zM490 208l-234 0L22 208 256 456.7 490 208zm-7.2-16L393.1 51 273.3 192l209.6 0zM374.7 48L137.3 48 256 187.6 374.7 48zM118.9 51L29.1 192l209.6 0L118.9 51z" />
    </Icon>
);

export default Gem;