
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=sharp-light u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 16 0 240c0 88.4 71.6 160 160 160s160-71.6 160-160l0-240 0-16 32 0 0 16 0 240c0 106-86 192-192 192S0 394 0 288L0 48 0 32l32 0z" />
    </Icon>
);

export default U;