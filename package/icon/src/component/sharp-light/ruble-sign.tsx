
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=sharp-light ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 32L64 32l0 16 0 240L0 288l0 32 64 0 0 64L0 384l0 32 64 0 0 48 0 16 32 0 0-16 0-48 224 0 0-32L96 384l0-64 144 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L80 32zM96 288L96 64l144 0c61.9 0 112 50.1 112 112s-50.1 112-112 112L96 288z" />
    </Icon>
);

export default RubleSign;