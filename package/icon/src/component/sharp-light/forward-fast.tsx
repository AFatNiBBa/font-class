
import { Icon } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=sharp-light forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 16 0 138L288 86 256 64l0 38.8L256 240 32 86 0 64l0 38.8L0 409.2 0 448l32-22L256 272l0 137.2 0 38.8 32-22L480 294l0 138 0 16 32 0 0-16 0-160 0-32 0-160 0-16-32 0zM288 124.8L478.8 256 288 387.2l0-262.3zM222.8 256L32 387.2l0-262.3L222.8 256z" />
    </Icon>
);

export default ForwardFast;