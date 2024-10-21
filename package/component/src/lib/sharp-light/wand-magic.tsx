
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=sharp-light wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 512l22.6-22.6L489.4 118.6 512 96 489.4 73.4 438.6 22.6 416 0 393.4 22.6 22.6 393.4 0 416l22.6 22.6 50.7 50.7L96 512zM356.7 206.1l-50.7-50.7L416 45.3 466.7 96 356.7 206.1zm-22.6 22.6L96 466.7 45.3 416 283.3 177.9l50.7 50.7z" />
    </Icon>
);

export default WandMagic;