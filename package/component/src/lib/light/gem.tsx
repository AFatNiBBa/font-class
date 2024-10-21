
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=light gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32c-5.2 0-10.1 2.5-13.1 6.8l-112 160c-4.3 6.2-3.7 14.6 1.4 20.1l240 256c3 3.2 7.2 5.1 11.7 5.1s8.6-1.8 11.7-5.1l240-256c5.2-5.5 5.8-13.9 1.4-20.1l-112-160c-3-4.3-7.9-6.8-13.1-6.8L128 32zm.9 42.7L222.7 192l-176 0L128.9 74.7zM52.9 224L256 224l203.1 0L256 440.6 52.9 224zm412.3-32l-176 0L383.1 74.7 465.3 192zM350.7 64L256 182.4 161.3 64l189.4 0z" />
    </Icon>
);

export default Gem;