
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=light oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 32C60.7 32 32 60.7 32 96l0 64 384 0 0-64c0-35.3-28.7-64-64-64L96 32zM32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256L32 192zM0 96C0 43 43 0 96 0L352 0c53 0 96 43 96 96l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96zM104 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM264 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 256l0 160 256 0 0-160L96 256zm-32 0c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-160zm64 48c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Oven;