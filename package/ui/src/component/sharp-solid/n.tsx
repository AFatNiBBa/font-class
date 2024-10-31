
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-solid n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32l47 0 9.6 11.5L320 359.6 320 64l0-32 64 0 0 32 0 384 0 32-47 0-9.6-11.5L64 152.4 64 448l0 32L0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default N;