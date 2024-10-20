
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=sharp-solid ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32L64 32l0 32 0 192L0 256l0 64 64 0 0 32L0 352l0 64 64 0 0 64 64 0 0-64 192 0 0-64-192 0 0-32 112 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L96 32zM240 256l-112 0 0-160 112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default RubleSign;