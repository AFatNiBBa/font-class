
import { Icon } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=sharp-thin volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M138.6 340l-4.5-4-6.1 0L16 336l0-160 112 0 6.1 0 4.5-4L278.1 48 304 48l0 416-25.9 0L138.6 340zM0 352l16 0 112 0L272 480l32 0 16 0 0-16 0-416 0-16-16 0-32 0L128 160 16 160 0 160l0 16L0 336l0 16zm413.7-18.3L480 267.3l66.3 66.3 11.3-11.3L491.3 256l66.3-66.3-11.3-11.3L480 244.7l-66.3-66.3-11.3 11.3L468.7 256l-66.3 66.3 11.3 11.3z" />
    </Icon>
);

export default VolumeXmark;