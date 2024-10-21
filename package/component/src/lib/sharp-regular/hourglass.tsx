
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-regular hourglass}
 * @preview ![hourglass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hourglass.svg)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 8 0 0 72 0 9.9 7 7 119 119L39 375l-7 7 0 9.9 0 72-8 0L0 464l0 48 24 0 336 0 24 0 0-48-24 0-8 0 0-72 0-9.9-7-7-119-119L345 137l7-7 0-9.9 0-72 8 0 24 0 0-48L360 0 24 0zM304 48l0 62.1-112 112L80 110.1 80 48l224 0zM192 289.9l112 112 0 62.1L80 464l0-62.1 112-112z" />
    </Icon>
);

export default Hourglass;