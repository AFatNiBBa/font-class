
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=sharp-regular wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 512l32-35.9L397.7 192l50.3 0 0-56.3L512 64 448 0 161.3 256 96 256l0 58.3L35.9 368 0 400l34 34 44 44 34 34zm-2-69.9L69.9 402 444.7 67.3 110 442.1z" />
    </Icon>
);

export default Wand;