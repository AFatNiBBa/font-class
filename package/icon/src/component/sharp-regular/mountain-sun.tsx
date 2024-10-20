
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-regular mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 0a80 80 0 1 1 0 160A80 80 0 1 1 560 0zM48 454.8l0 9.2 416 0 0-9.2L256 149.3 48 454.8zM227 106.6L256 64l29 42.6L412.5 293.9l38.7-58.4L480 192l28.8 43.5L640 433.7l0 30.3 0 48-48 0-80 0-48 0-7 0L48 512 0 512l0-48 0-24L227 106.6zM512 440l0 24 80 0 0-15.8L480 279l-38.3 57.8L512 440z" />
    </Icon>
);

export default MountainSun;