
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=sharp-duotone-solid arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-arrow-down.svg)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M274.7 336l22.6 22.6 96 96L416 477.3l22.6-22.6 96-96L557.3 336 512 290.7l-22.6 22.6L448 354.7 448 64l0-32-64 0 0 32 0 290.7-41.4-41.4L320 290.7 274.7 336z" />
        <path d="M160 34.7l22.6 22.6 96 96L301.3 176 256 221.3l-22.6-22.6L192 157.3 192 448l0 32-64 0 0-32 0-290.7L86.6 198.6 64 221.3 18.7 176l22.6-22.6 96-96L160 34.7z" />
    </Icon>
);

export default ArrowUpArrowDown;