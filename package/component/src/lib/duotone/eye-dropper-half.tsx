
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-dropper-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper-half?s=duotone eye-dropper-half}
 * @preview ![eye-dropper-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eye-dropper-half.svg)
 */
const EyeDropperHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4c6.2 6.2 14.4 9.4 22.6 9.4c6.1 0 12.3-1.8 17.7-5.4L89.7 480l42.4 0c21.2 0 41.6-8.4 56.6-23.4L332 313.3 286.7 268c-17.3 17.3-34.7 34.7-52 52l-91.3 91.3c-3 3-7.1 4.7-11.3 4.7L96 416c0-12 0-24.1 0-36.1c0-.5 0-1.1 .1-1.6s.1-1 .2-1.6c.2-1 .5-2 .9-3c.8-1.9 2-3.7 3.5-5.2c16.2-16.2 32.4-32.4 48.6-48.6c31.6-31.6 63.2-63.2 94.7-94.7c-15.1-15.1-30.2-30.2-45.3-45.3L55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4L5.4 462.2z" />
        <path d="M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM143.4 411.3L234.7 320l-85.5 0-48.6 48.6c-3 3-4.7 7.1-4.7 11.3L96 416l36.1 0c4.2 0 8.3-1.7 11.3-4.7z" />
    </Icon>
);

export default EyeDropperHalf;