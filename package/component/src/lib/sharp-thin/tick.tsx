
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-thin tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 110.2L84.8 272l22.5 0L144 110.2 144 48 48 48l0 62.2zM144 32l16 0 0 16 0 64L120 288l-48 0L32 112l0-64 0-16 16 0 96 0z" />
    </Icon>
);

export default Tick;