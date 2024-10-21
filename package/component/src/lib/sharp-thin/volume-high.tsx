
import { Icon } from "../../index";

/**
 * A component that renders the `volume-high` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-high?s=sharp-thin volume-high}
 * @preview ![volume-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volume-high.svg)
 */
const VolumeHigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M524.8 486.4C594.8 433.9 640 350.2 640 256s-45.2-177.9-115.2-230.4l-9.6 12.8C581.3 88 624 167 624 256s-42.7 168-108.8 217.6l9.6 12.8zM544 256c0-62.8-30.2-118.6-76.8-153.6l-9.6 12.8C500.4 147.3 528 198.4 528 256s-27.6 108.7-70.4 140.8l9.6 12.8c46.6-35 76.8-90.8 76.8-153.6zm-96 0c0-31.4-15.1-59.3-38.4-76.8L400 192c19.4 14.6 32 37.8 32 64s-12.6 49.4-32 64l9.6 12.8C432.9 315.3 448 287.4 448 256zM138.6 340l-4.5-4-6.1 0L16 336l0-160 112 0 6.1 0 4.5-4L278.1 48 304 48l0 416-25.9 0L138.6 340zM0 352l16 0 112 0L272 480l32 0 16 0 0-16 0-416 0-16-16 0-32 0L128 160 16 160 0 160l0 16L0 336l0 16z" />
    </Icon>
);

export default VolumeHigh;