
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=regular intersection}
 * @preview ![intersection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/intersection.svg)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 480c13.3 0 24-10.7 24-24l0-232c0-79.5 64.5-144 144-144s144 64.5 144 144l0 232c0 13.3 10.7 24 24 24s24-10.7 24-24l0-232c0-106-86-192-192-192S0 118 0 224L0 456c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default Intersection;