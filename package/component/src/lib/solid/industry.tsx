
import { Icon } from "../../index";

/**
 * A component that renders the `industry` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=solid industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z" />
    </Icon>
);

export default Industry;