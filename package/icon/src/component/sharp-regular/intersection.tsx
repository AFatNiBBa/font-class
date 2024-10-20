
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=sharp-regular intersection}
 * @preview ![intersection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/intersection.svg)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 224L0 480l48 0 0-256c0-79.5 64.5-144 144-144s144 64.5 144 144l0 256 48 0 0-256c0-106-86-192-192-192S0 118 0 224z" />
    </Icon>
);

export default Intersection;