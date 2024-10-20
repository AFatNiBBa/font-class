
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=sharp-duotone-solid arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 32 0 290.7 32 32 32-32L224 64l0-32-64 0z" />
        <path d="M192 477.3l22.6-22.6 144-144L381.3 288 336 242.7l-22.6 22.6L192 386.7 70.6 265.4 48 242.7 2.7 288l22.6 22.6 144 144L192 477.3z" />
    </Icon>
);

export default ArrowDown;