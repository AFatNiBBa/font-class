
import { Icon } from "../../index";

/**
 * A component that renders the `road-barrier` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-barrier?s=thin road-barrier}
 * @preview ![road-barrier](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/road-barrier.svg)
 */
const RoadBarrier: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 32c4.4 0 8 3.6 8 8l0 40 608 0 0-40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 40 0 16 0 192 0 16 0 168c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-168L16 304l0 168c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 304l0-16L0 96 0 80 0 40c0-4.4 3.6-8 8-8zM624 288l0-192-7.1 0-1.8 3.6L520.9 288 624 288zM16 288l7.1 0 1.8-3.6L119.1 96 16 96l0 192zM599.1 96L456.9 96l-1.8 3.6L360.9 288l142.1 0 1.8-3.6L599.1 96zM136.9 96l-1.8 3.6L40.9 288l142.1 0 1.8-3.6L279.1 96 136.9 96zm158.2 3.6L200.9 288l142.1 0 1.8-3.6L439.1 96 296.9 96l-1.8 3.6z" />
    </Icon>
);

export default RoadBarrier;