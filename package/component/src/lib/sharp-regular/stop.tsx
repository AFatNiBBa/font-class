
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-regular stop}
 * @preview ![stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stop.svg)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 112l0 288L48 400l0-288 288 0zM48 64L0 64l0 48L0 400l0 48 48 0 288 0 48 0 0-48 0-288 0-48-48 0L48 64z" />
    </Icon>
);

export default Stop;