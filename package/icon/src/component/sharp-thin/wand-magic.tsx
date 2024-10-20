
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=sharp-thin wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 512l11.3-11.3L500.7 91.3 512 80 500.7 68.7 443.3 11.3 432 0 420.7 11.3 11.3 420.7 0 432l11.3 11.3 57.4 57.4L80 512zM432 22.6L489.4 80l-135 135L297 157.7l135-135zM285.7 169L343 226.3 80 489.4 22.6 432l263-263z" />
    </Icon>
);

export default WandMagic;