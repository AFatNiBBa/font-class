
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=sharp-solid arrow-down}
 * @preview ![arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down.svg)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M214.6 454.6L192 477.3l-22.6-22.6-144-144L2.7 288 48 242.8l22.6 22.6L160 354.8 160 64l0-32 64 0 0 32 0 290.7 89.4-89.4L336 242.8 381.3 288l-22.6 22.6-144 144z" />
    </Icon>
);

export default ArrowDown;