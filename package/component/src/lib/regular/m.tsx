
import { Icon } from "../../index";

/**
 * A component that renders the `m` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=regular m}
 * @preview ![m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/m.svg)
 */
const M: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M17.1 33C27.3 30 38.2 34 44 42.8L224 316.3 403.9 42.8C409.8 34 420.7 30 430.9 33S448 45.4 448 56l0 400c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-319.9-156 237c-4.4 6.7-12 10.8-20 10.8s-15.6-4.1-20-10.8L48 136.1 48 456c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 45.4 7 36.1 17.1 33z" />
    </Icon>
);

export default M;