
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-regular tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 108L96 252l24-144 0-28L72 80l0 28zm48-76l48 0 0 48 0 32L136 304l-80 0L24 112l0-32 0-48 48 0 48 0z" />
    </Icon>
);

export default Tick;