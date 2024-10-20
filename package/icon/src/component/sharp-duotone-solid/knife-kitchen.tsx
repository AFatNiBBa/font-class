
import { Icon, generic } from "../../index";

/**
 * A component that renders the `knife-kitchen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife-kitchen?s=sharp-duotone-solid knife-kitchen}
 * @preview ![knife-kitchen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/knife-kitchen.svg)
 */
const KnifeKitchen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480s48 32 112 32c160 0 296-152 296-152l-32-32L264 216 0 480z" />
        <path d="M568 88L480 0 264 216 376 328l72-56 0-64L568 88zM416 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm72-72a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default KnifeKitchen;