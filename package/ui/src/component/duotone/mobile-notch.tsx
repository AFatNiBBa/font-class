
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=duotone mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 80C16 35.8 51.8 0 96 0L288 0c44.2 0 80 35.8 80 80l0 352c0 44.2-35.8 80-80 80L96 512c-44.2 0-80-35.8-80-80L16 80zm64 0l0 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-352c0-8.8-7.2-16-16-16l-32 0 0 16c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-16L96 64c-8.8 0-16 7.2-16 16z" />
        <path d="M128 64H96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H256V80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V64z" />
    </Icon>
);

export default MobileNotch;