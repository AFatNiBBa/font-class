
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=sharp-thin u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32l0 8 0 248c0 97.2 78.8 176 176 176s176-78.8 176-176l0-248 0-8 16 0 0 8 0 248c0 106-86 192-192 192S0 394 0 288L0 40l0-8 16 0z" />
    </Icon>
);

export default U;