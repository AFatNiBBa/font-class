
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-crash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-crash?s=sharp-solid hammer-crash}
 * @preview ![hammer-crash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hammer-crash.svg)
 */
const HammerCrash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M318.3 338.9l-25.1-12.5-16.9 72.7 112.1-54.6 77.4 97.8 27.3-121.7 124.7 .5L539.6 224l78.2-97.2-124.7 .5L465.8 5.6 400.4 88.4l5.9 3 28.6 14.3-14.3 28.6-88 176-14.3 28.6zM304 296l88-176L184 16 64 16 0 144 304 296zM109.2 234.4L.1 452.5l85.9 42.9L195 277.3l-85.9-42.9z" />
    </Icon>
);

export default HammerCrash;