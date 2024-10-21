
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=duotone eye-dropper}
 * @preview ![eye-dropper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eye-dropper.svg)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.3 3.2 16.5 9.4 22.6s14.4 9.4 22.6 9.4c6.1 0 12.3-1.8 17.7-5.4L89.7 480l42.4 0c21.2 0 41.6-8.4 56.6-23.4L332 313.3 286.7 268 143.4 411.3c-3 3-7.1 4.7-11.3 4.7L96 416l0-36.1c0-4.2 1.7-8.3 4.7-11.3L244 225.3c-15.1-15.1-30.2-30.2-45.3-45.3L55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4L5.4 462.2C1.8 467.7 0 473.8 0 480z" />
        <path d="M240.1 130.8L341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1L381.2 271.9l9.4 9.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l9.4 9.4z" />
    </Icon>
);

export default EyeDropper;