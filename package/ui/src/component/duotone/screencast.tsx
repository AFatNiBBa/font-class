
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screencast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=duotone screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 96 24 0c13.6 0 27 1 40 3l0-99 448 0 0 320-227 0c2 13 3 26.4 3 40l0 24 224 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M0 248c0-13.3 10.7-24 24-24c128.1 0 232 103.9 232 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zM24 320c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Screencast;