
import { Icon } from "../../index";

/**
 * A component that renders the `scroll` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=sharp-solid scroll}
 * @preview ![scroll](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scroll.svg)
 */
const Scroll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 80l0 80 48 0 48 0 0-80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48l0 304c0 35.3 28.7 64 64 64s64-28.7 64-64l0-48 0-16 16 0 208 0 0-192c0-53-43-96-96-96L112 32zM464 480c61.9 0 112-50.1 112-112l0-16-288 0 0 32c0 53-43 96-96 96l176 0 96 0z" />
    </Icon>
);

export default Scroll;