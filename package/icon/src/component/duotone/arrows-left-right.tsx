
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=duotone arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 224l0 64 146.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L402.7 224 256 224z" />
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 256 288l0-64-146.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96z" />
    </Icon>
);

export default ArrowsLeftRight;