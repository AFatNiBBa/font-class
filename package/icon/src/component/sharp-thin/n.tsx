
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-thin n}
 * @preview ![n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/n.svg)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 40l0-8 11.7 0 2.4 2.8L368 450.3 368 40l0-8 16 0 0 8 0 432 0 8-11.7 0-2.4-2.8L16 61.7 16 472l0 8L0 480l0-8L0 40z" />
    </Icon>
);

export default N;