
import { Icon } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=sharp-thin peseta-sign}
 * @preview ![peseta-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/peseta-sign.svg)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 32l-8 0 0 8 0 136L0 176l0 16 48 0 0 120 0 160 0 8 16 0 0-8 0-152 128 0c74.1 0 135.2-56 143.1-128l48.9 0 0-16-48 0c0-79.5-64.5-144-144-144L56 32zM320 176L64 176 64 48l128 0c70.7 0 128 57.3 128 128zM64 192l255 0c-7.9 63.1-61.7 112-127 112L64 304l0-112z" />
    </Icon>
);

export default PesetaSign;