
import { Icon } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=sharp-light road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 80s0 0 0 0l0 32L0 272l0 32L0 464l0 16 32 0 0-16 0-160 576 0 0 160 0 16 32 0 0-16 0-160 0-32 0-160 0-32 0-32 0-16-32 0 0 16 0 32L32 80l0-32zm0 224l0-160 118.1 0-80 160L32 272zM608 112l0 160-118.1 0 80-160 38.1 0zm-294.1 0l92.2 0-80 160-92.2 0 80-160zM454.1 272l-92.2 0 80-160 92.2 0-80 160zm-176-160l-80 160-92.2 0 80-160 92.2 0z" />
    </Icon>
);

export default RoadBarrier;