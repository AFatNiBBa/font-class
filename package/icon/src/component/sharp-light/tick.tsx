
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-light tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M56 116.2L89.3 256l13.4 0L136 116.2 136 64 56 64l0 52.2zM136 32l32 0 0 32 0 56L128 288l-64 0L24 120l0-56 0-32 32 0 80 0z" />
    </Icon>
);

export default Tick;