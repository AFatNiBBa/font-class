
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=sharp-regular wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 512l33.9-33.9L478.1 145.9 512 112 478.1 78.1 433.9 33.9 400 0 366.1 33.9 33.9 366.1 0 400l33.9 33.9 44.1 44.1L112 512zM359 197.1L314.9 153 400 67.9 444.1 112 359 197.1zM325.1 231L112 444.1 67.9 400 281 186.9 325.1 231z" />
    </Icon>
);

export default WandMagic;