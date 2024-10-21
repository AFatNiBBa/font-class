
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-regular gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M289 445l-33 35-33-35L0 208 112 32l288 0L512 208 289 445zM431 224l-175 0L81 224 256 410 431 224zm3.7-48L385 97.9 311.5 176l123.2 0zM336 80L176 80l80 85 80-85zM127 97.9L77.3 176l123.2 0L127 97.9z" />
    </Icon>
);

export default Gem;