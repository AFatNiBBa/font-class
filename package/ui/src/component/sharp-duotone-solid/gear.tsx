
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear?s=sharp-duotone-solid gear}
 * @preview ![gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gear.svg)
 */
const Gear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M312 0L200 0 182.8 78.4c-15.8 6.5-30.6 15.1-44 25.4L62.3 79.5l-56 97 59.4 54.1C64.6 238.9 64 247.4 64 256s.6 17.1 1.7 25.4L6.3 335.5l56 97 76.5-24.4c13.4 10.3 28.2 18.9 44 25.4L200 512l112 0 17.2-78.4c15.8-6.5 30.6-15.1 44-25.4l76.5 24.4 56-97-59.4-54.1c1.1-8.3 1.7-16.8 1.7-25.4s-.6-17.1-1.7-25.4l59.4-54.1-56-97-76.5 24.4C359.8 93.6 345 85 329.2 78.4L312 0zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Gear;