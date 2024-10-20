
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=duotone mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l160 0 0-24c0-13.6 1-27 3-40L64 448 64 64l224 0 0 251.7c18.3-21.2 39.9-39.5 64-54L352 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM128 400c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16z" />
        <path d="M512 280c0-13.3-10.7-24-24-24c-128.1 0-232 103.9-232 232c0 13.3 10.7 24 24 24s24-10.7 24-24c0-101.6 82.4-184 184-184c13.3 0 24-10.7 24-24zM448 480a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm40-128c-75.1 0-136 60.9-136 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-48.6 39.4-88 88-88c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default MobileSignal;