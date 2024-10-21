
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=sharp-thin card-diamond}
 * @preview ![card-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/card-diamond.svg)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM203.3 148.7l96 96L310.6 256l-11.3 11.3-96 96L192 374.6l-11.3-11.3-96-96L73.4 256l11.3-11.3 96-96L192 137.4l11.3 11.3zM96 256l11.3 11.3 73.4 73.4L192 352l11.3-11.3 73.4-73.4L288 256l-11.3-11.3-73.4-73.4L192 160l-11.3 11.3-73.4 73.4L96 256z" />
    </Icon>
);

export default CardDiamond;