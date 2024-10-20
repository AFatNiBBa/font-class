
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=sharp-duotone-solid wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 512L0 432 128 316.8l0-60.8 67.6 0L480 0l32 32L416 138.7l0 53.3-48 0L80 512z" />
    </Icon>
);

export default Wand;