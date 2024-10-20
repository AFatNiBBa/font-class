
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=thin u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 32c4.4 0 8 3.6 8 8l0 248c0 97.2 78.8 176 176 176s176-78.8 176-176l0-248c0-4.4 3.6-8 8-8s8 3.6 8 8l0 248c0 106-86 192-192 192S0 394 0 288L0 40c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default U;