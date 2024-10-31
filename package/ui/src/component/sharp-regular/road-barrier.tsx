
import { Icon } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=sharp-regular road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 456l0 24 48 0 0-24 0-152 544 0 0 152 0 24 48 0 0-24 0-152 0-48 0-128 0-48 0-24 0-24-48 0 0 24 0 24L48 80s0 0 0 0l0-24zm544 72l0 128-85.2 0 64-128 21.2 0zm-277.2 0l74.3 0-64 128-74.3 0 64-128zM453.2 256l-74.3 0 64-128 74.3 0-64 128zm-192-128l-64 128-74.3 0 64-128 74.3 0zm-128 0l-64 128L48 256l0-128 85.2 0z" />
    </Icon>
);

export default RoadBarrier;