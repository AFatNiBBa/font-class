
import { Icon } from "../../index";

/**
 * A component that renders the `bin-bottles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bin-bottles?s=sharp-solid bin-bottles}
 * @preview ![bin-bottles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bin-bottles.svg)
 */
const BinBottles: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 0l0 32 16 0 0 32-16 0L128 64l-16 0 0-32 16 0 0-32L256 0zM32 144l96-48 128 0 63.6 31.8L352 144s0 0 0 0l0 48L32 192l0-48zm543.6-8l0 56L384 192l0-48 0-19.8-17.7-8.8L321.8 93.1l61.8-29 0-64.1 128 0 0 64.1 64 30 0 41.9zM0 224l640 0 0 64-32 0L576 512 64 512 32 288 0 288l0-64z" />
    </Icon>
);

export default BinBottles;