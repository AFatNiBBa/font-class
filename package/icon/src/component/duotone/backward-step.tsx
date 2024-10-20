
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=duotone backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 0-30L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M301.6 445c-11.2 5.3-24.5 3.6-34.1-4.4l-192-160L64 271l0-30 11.5-9.6 192-160c9.5-7.9 22.8-9.7 34.1-4.4S320 83.6 320 96l0 320c0 12.4-7.2 23.7-18.4 29z" />
    </Icon>
);

export default BackwardStep;