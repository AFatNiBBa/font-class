
import { Icon } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=light road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 32c8.8 0 16 7.2 16 16l0 32 576 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 32 0 160 0 32 0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160L32 304l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 304l0-32L0 112 0 80 0 48c0-8.8 7.2-16 16-16zM608 272l0-160-38.1 0-80 160L608 272zM32 272l38.1 0 80-160L32 112l0 160zM406.1 112l-92.2 0-80 160 92.2 0 80-160zm35.8 0l-80 160 92.2 0 80-160-92.2 0zm-256 0l-80 160 92.2 0 80-160-92.2 0z" />
    </Icon>
);

export default RoadBarrier;