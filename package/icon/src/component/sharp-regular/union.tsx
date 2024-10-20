
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-regular union}
 * @preview ![union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/union.svg)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 288L0 32l48 0 0 256c0 79.5 64.5 144 144 144s144-64.5 144-144l0-256 48 0 0 256c0 106-86 192-192 192S0 394 0 288z" />
    </Icon>
);

export default Union;