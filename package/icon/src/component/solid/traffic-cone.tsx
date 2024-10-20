
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=solid traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.7 128L216 20.3C220.8 8.1 232.7 0 245.8 0l20.4 0c13.2 0 25 8.1 29.8 20.3L338.3 128l-164.6 0zm-25.1 64l214.9 0 37.7 96-290.3 0 37.7-96zM48 448l37.7-96 340.6 0L464 448l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0z" />
    </Icon>
);

export default TrafficCone;