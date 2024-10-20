
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=regular ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M111.3 32C85.2 32 64 53.2 64 79.3L64 272l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 48-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 184 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-184 0 0-48 128 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L111.3 32zM240 272l-128 0 0-192 128 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default RubleSign;