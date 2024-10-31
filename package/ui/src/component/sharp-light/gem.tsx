
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-light gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278 456.7L256 480l-22-23.3L0 208 112 32l288 0L512 208 278 456.7zM453 224l-197 0L59 224 256 433.3 453 224zm10.9-32L386.5 70.4 289.3 192l174.6 0zM350.7 64L161.3 64 256 182.4 350.7 64zM125.5 70.4L48.1 192l174.6 0L125.5 70.4z" />
    </Icon>
);

export default Gem;