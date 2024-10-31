
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=sharp-thin ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M72 32l-8 0 0 8 0 248L0 288l0 16 64 0 0 64L0 368l0 16 64 0 0 80 0 8 16 0 0-8 0-80 240 0 0-16L80 368l0-64 152 0c75.1 0 136-60.9 136-136s-60.9-136-136-136L72 32zm8 256L80 48l152 0c66.3 0 120 53.7 120 120s-53.7 120-120 120L80 288z" />
    </Icon>
);

export default RubleSign;