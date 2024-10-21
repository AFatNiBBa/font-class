
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=light traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248.2 32l15.5 0c3.3 0 6.2 2 7.4 5l49.2 123-128.7 0L240.8 37c1.2-3 4.2-5 7.4-5zm84.9 160l51.2 128-256.7 0 51.2-128 154.3 0zm64 160l51.2 128L63.6 480l51.2-128 282.3 0zM211.1 25.1L29.2 480 16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-13.2 0L300.9 25.1C294.8 10 280.1 0 263.8 0L248.2 0c-16.4 0-31.1 10-37.1 25.1z" />
    </Icon>
);

export default TrafficCone;