
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-thin stop}
 * @preview ![stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stop.svg)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 80l0 352L16 432 16 80l352 0zM16 64L0 64 0 80 0 432l0 16 16 0 352 0 16 0 0-16 0-352 0-16-16 0L16 64z" />
    </Icon>
);

export default Stop;