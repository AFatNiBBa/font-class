
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=sharp-duotone-solid wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M280 120l80.4-80.4L400 0l39.6 39.6 32.8 32.8L512 112l-39.6 39.6L392 232l-39.6-39.6L432.8 112 400 79.2l-80.4 80.4L280 120z" />
        <path d="M392 232L280 120 0 400 112 512 392 232z" />
    </Icon>
);

export default WandMagic;