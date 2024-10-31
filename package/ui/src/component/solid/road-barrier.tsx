
import { Icon } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=solid road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-181.7L149.2 96 64 96l0-32c0-17.7-14.3-32-32-32zM405.2 96l-74.3 0-5.4 10.7L234.8 288l74.3 0 5.4-10.7L405.2 96zM362.8 288l74.3 0 5.4-10.7L533.2 96l-74.3 0-5.4 10.7L362.8 288zM202.8 96l-5.4 10.7L106.8 288l74.3 0 5.4-10.7L277.2 96l-74.3 0zm288 192l85.2 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.7L490.8 288z" />
    </Icon>
);

export default RoadBarrier;