
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=sharp-solid card-diamond}
 * @preview ![card-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/card-diamond.svg)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM80 256L192 144 304 256 192 368 80 256z" />
    </Icon>
);

export default CardDiamond;