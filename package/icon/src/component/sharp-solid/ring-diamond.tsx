
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=sharp-solid ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 0L96 72l35.8 65.6C55.2 162.9 0 235 0 320C0 426 86 512 192 512s192-86 192-192c0-85-55.2-157.1-131.8-182.4L288 72 256 0 128 0zM320 320A128 128 0 1 1 64 320a128 128 0 1 1 256 0z" />
    </Icon>
);

export default RingDiamond;