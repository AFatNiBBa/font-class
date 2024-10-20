
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-circle-check?s=duotone pipe-circle-check}
 * @preview ![pipe-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pipe-circle-check.svg)
 */
const PipeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32S0 110.3 0 128zm96 0l0 256 224.7 0c-.5-5.3-.7-10.6-.7-16c0-68.4 39-127.7 96-156.8l0-83.2L96 128zm352 0l0 70.6c15.3-4.3 31.4-6.6 48-6.6c5.4 0 10.7 .2 16 .7l0-64.7c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default PipeCircleCheck;