
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=sharp-solid up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32L0 224l0 32 128 0 0 224 128 0 0-224 128 0 0-32L192 32z" />
    </Icon>
);

export default Up;