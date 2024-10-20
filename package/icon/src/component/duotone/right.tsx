
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=duotone right}
 * @preview ![right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/right.svg)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 232l0 48c0 22.1 17.9 40 40 40l184 0c0-42.7 0-85.3 0-128c-61.3 0-122.7 0-184 0c-22.1 0-40 17.9-40 40z" />
        <path d="M224 320s0 0 0 0l0 96c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 96s0 0 0 0l0 128z" />
    </Icon>
);

export default Right;