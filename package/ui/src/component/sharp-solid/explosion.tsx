
import { Icon } from "../../index";

/**
 * A component that renders the `explosion` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=sharp-solid explosion}
 * @preview ![explosion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/explosion.svg)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 368L0 320l82.3 96 115.2 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l115.2 0L576 320 432 368 544 0 336 296 312 128l-48 0L240 304 96 192l48 176zM312 0L264 0l0 24 0 48 0 24 48 0 0-24 0-48 0-24zM32 448L0 448l0 64 32 0 512 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Explosion;