
import { Icon } from "../../index";

/**
 * A component that renders the `trailer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trailer?s=sharp-light trailer}
 * @preview ![trailer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trailer.svg)
 */
const Trailer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32l16 0 480 0 16 0 0 16 0 304 104 0 16 0 0 32-16 0-328 0c0 53-43 96-96 96s-96-43-96-96l-80 0L0 384l0-16L0 48 0 32zM128 384a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm154.5-32L480 352l0-288L32 64l0 288 69.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64zM128 96l0 16 0 128 0 16-32 0 0-16 0-128 0-16 32 0zm96 0l0 16 0 128 0 16-32 0 0-16 0-128 0-16 32 0zm96 0l0 16 0 160 0 16-32 0 0-16 0-160 0-16 32 0zm96 0l0 16 0 160 0 16-32 0 0-16 0-160 0-16 32 0z" />
    </Icon>
);

export default Trailer;