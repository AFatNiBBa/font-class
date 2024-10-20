
import { Icon } from "../../index";

/**
 * A component that renders the `volume-low` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=sharp-thin volume-low}
 * @preview ![volume-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volume-low.svg)
 */
const VolumeLow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M138.6 340l-4.5-4-6.1 0L16 336l0-160 112 0 6.1 0 4.5-4L278.1 48 304 48l0 416-25.9 0L138.6 340zM0 352l16 0 112 0L272 480l32 0 16 0 0-16 0-416 0-16-16 0-32 0L128 160 16 160 0 160l0 16L0 336l0 16zm409.6-19.2C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8L400 192c19.4 14.6 32 37.8 32 64s-12.6 49.4-32 64l9.6 12.8z" />
    </Icon>
);

export default VolumeLow;