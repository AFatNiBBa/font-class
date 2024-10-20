
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=sharp-solid traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 128L224 0l64 0 50.3 128-164.6 0zm-25.1 64l214.9 0 37.7 96-290.3 0 37.7-96zM48 448l37.7-96 340.6 0L464 448l48 0 0 64L0 512l0-64 48 0z" />
    </Icon>
);

export default TrafficCone;