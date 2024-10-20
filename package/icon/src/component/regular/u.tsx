
import { Icon } from "../../index";

/**
 * A component that renders the `u` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=regular u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32c13.3 0 24 10.7 24 24l0 232c0 79.5 64.5 144 144 144s144-64.5 144-144l0-232c0-13.3 10.7-24 24-24s24 10.7 24 24l0 232c0 106-86 192-192 192S0 394 0 288L0 56C0 42.7 10.7 32 24 32z" />
    </Icon>
);

export default U;