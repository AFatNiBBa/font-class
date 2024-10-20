
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-solid union}
 * @preview ![union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/union.svg)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 288L0 32l64 0 0 256c0 70.7 57.3 128 128 128s128-57.3 128-128l0-256 64 0 0 256c0 106-86 192-192 192S0 394 0 288z" />
    </Icon>
);

export default Union;