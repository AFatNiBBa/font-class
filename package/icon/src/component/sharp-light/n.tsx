
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-light n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48L0 32l23.4 0 4.8 5.7L352 420.3 352 48l0-16 32 0 0 16 0 416 0 16-23.4 0-4.8-5.7L32 91.7 32 464l0 16L0 480l0-16L0 48z" />
    </Icon>
);

export default N;