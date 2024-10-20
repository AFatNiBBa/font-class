
import { Icon } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=regular road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 32c13.3 0 24 10.7 24 24l0 24 544 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 24 0 48 0 128 0 48 0 152c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-152L48 304l0 152c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 42.7 10.7 32 24 32zM592 256l0-128-21.2 0-64 128 85.2 0zM48 256l21.2 0 64-128L48 128l0 128zM389.2 128l-74.3 0-64 128 74.3 0 64-128zM378.8 256l74.3 0 64-128-74.3 0-64 128zm-192-128l-64 128 74.3 0 64-128-74.3 0z" />
    </Icon>
);

export default RoadBarrier;