
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=sharp-solid wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 512l39.6-39.6L472.4 151.6 512 112 472.4 72.4 439.6 39.6 400 0 360.4 39.6 39.6 360.4 0 400l39.6 39.6 32.8 32.8L112 512zM400 79.2L432.8 112l-80.4 80.4-32.8-32.8L400 79.2z" />
    </Icon>
);

export default WandMagic;