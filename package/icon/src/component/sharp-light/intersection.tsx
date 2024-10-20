
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=sharp-light intersection}
 * @preview ![intersection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/intersection.svg)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 224L0 480l32 0 0-256c0-88.4 71.6-160 160-160s160 71.6 160 160l0 256 32 0 0-256c0-106-86-192-192-192S0 118 0 224z" />
    </Icon>
);

export default Intersection;