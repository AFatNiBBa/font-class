
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-cone` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=regular traffic-cone}
 * @preview ![traffic-cone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/traffic-cone.svg)
 */
const TrafficCone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M217.8 15c3.7-9 12.5-15 22.2-15l32 0c9.8 0 18.6 5.9 22.2 15L476.9 464l11.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l11.1 0L217.8 15zM386 368l-260 0L86.9 464l338.1 0-39-96zm-19.5-48L320.9 208l-129.9 0L145.5 320l221 0zM210.6 160l90.8 0L256 48.4 210.6 160z" />
    </Icon>
);

export default TrafficCone;