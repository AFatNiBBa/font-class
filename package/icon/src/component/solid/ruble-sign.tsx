
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=solid ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32C78.3 32 64 46.3 64 64l0 192-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-32 112 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L96 32zM240 256l-112 0 0-160 112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default RubleSign;