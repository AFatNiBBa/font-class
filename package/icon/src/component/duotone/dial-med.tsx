
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=duotone dial-med}
 * @preview ![dial-med](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial-med.svg)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M264 129c-77 11.6-136 78-136 158.2c0 88.4 71.6 160 160 160s160-71.6 160-160C448 207 389 140.6 312 129l0 158.2c0 13.3-10.7 24-24 24s-24-10.7-24-24L264 129z" />
    </Icon>
);

export default DialMed;