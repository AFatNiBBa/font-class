
import { Icon, generic } from "../../index";

/**
 * A component that renders the `industry` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=sharp-duotone-solid industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 32l0 192 0 160 0 96 512 0 0-256 0-68.4L352 265.4l0-41.4 0-13.9 0-54.4L160 265.4l0-41.4 0-13.9L160 32 32 32z" />
        <path d="M363.9 148.8L160 265.4l0-55.3L340.1 107.2l23.8 41.7zm192 0L352 265.4l0-55.3L532.1 107.2l23.8 41.7z" />
    </Icon>
);

export default Industry;