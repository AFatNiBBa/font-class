
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-solid tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 288L32 32H160L128 288H64z" />
    </Icon>
);

export default Tick;