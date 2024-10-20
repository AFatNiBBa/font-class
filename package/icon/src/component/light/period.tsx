
import { Icon } from "../../index";

/**
 * A component that renders the `period` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=light period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Period;