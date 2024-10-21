
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-light i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 128 0 0 384L16 448 0 448l0 32 16 0 288 0 16 0 0-32-16 0-128 0 0-384 128 0 16 0 0-32-16 0L160 32 16 32z" />
    </Icon>
);

export default I;