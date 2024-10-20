
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=sharp-regular ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M88 32L64 32l0 24 0 216L0 272l0 48 64 0 0 48L0 368l0 48 64 0 0 40 0 24 48 0 0-24 0-40 208 0 0-48-208 0 0-48 128 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L88 32zM240 272l-128 0 0-192 128 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default RubleSign;