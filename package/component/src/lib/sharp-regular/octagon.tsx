
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-regular octagon}
 * @preview ![octagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/octagon.svg)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M179.9 464l152.2 0L464 332.1l0-152.2L332.1 48 179.9 48 48 179.9l0 152.2L179.9 464zM0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160z" />
    </Icon>
);

export default Octagon;