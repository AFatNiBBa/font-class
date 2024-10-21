
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=sharp-regular u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 32l0 24 0 232c0 79.5 64.5 144 144 144s144-64.5 144-144l0-232 0-24 48 0 0 24 0 232c0 106-86 192-192 192S0 394 0 288L0 56 0 32l48 0z" />
    </Icon>
);

export default U;