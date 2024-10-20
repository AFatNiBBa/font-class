
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=sharp-solid intersection}
 * @preview ![intersection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/intersection.svg)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 480l0-32 0-224c0-70.7 57.3-128 128-128s128 57.3 128 128l0 224 0 32 64 0 0-32 0-224c0-106-86-192-192-192S0 118 0 224L0 448l0 32 64 0z" />
    </Icon>
);

export default Intersection;