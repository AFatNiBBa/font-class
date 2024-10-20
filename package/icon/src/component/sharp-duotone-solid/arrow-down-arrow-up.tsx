
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-arrow-up?s=sharp-duotone-solid arrow-down-arrow-up}
 * @preview ![arrow-down-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-arrow-up.svg)
 */
const ArrowDownArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M274.7 173.3L320 218.5l22.6-22.6L384 154.5l0 290.7 0 32 64 0 0-32 0-290.7 41.4 41.4L512 218.5l45.3-45.3-22.6-22.6-96-96L416 32 393.4 54.6l-96 96-22.6 22.6z" />
        <path d="M160 480l22.6-22.6 96-96 22.6-22.6L256 293.5l-22.6 22.6L192 357.5l0-290.7 0-32-64 0 0 32 0 290.7L86.6 316.1 64 293.5 18.7 338.7l22.6 22.6 96 96L160 480z" />
    </Icon>
);

export default ArrowDownArrowUp;