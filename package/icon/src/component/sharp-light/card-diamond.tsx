
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=sharp-light card-diamond}
 * @preview ![card-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/card-diamond.svg)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM203.3 148.7l96 96L310.6 256l-11.3 11.3-96 96L192 374.6l-11.3-11.3-96-96L73.4 256l11.3-11.3 96-96L192 137.4l11.3 11.3zM192 329.4L265.4 256 192 182.6 118.6 256 192 329.4z" />
    </Icon>
);

export default CardDiamond;