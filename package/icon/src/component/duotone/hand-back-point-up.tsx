
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-point-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-up?s=duotone hand-back-point-up}
 * @preview ![hand-back-point-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-back-point-up.svg)
 */
const HandBackPointUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M136 0C113.9 0 96 17.9 96 40l0 200 0 7 0 73c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-55.7c-2 1.4-3.9 3-5.8 4.5L39 284.8C24.4 297 16 315 16 334L16 372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1L288 512c70.7 0 128-57.3 128-128l0-64 0-32c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C334 227.5 313.3 208 288 208c-12.4 0-23.6 4.7-32.1 12.3C254 195.5 233.3 176 208 176c-12.3 0-23.5 4.6-32 12.2L176 40c0-22.1-17.9-40-40-40z" />
    </Icon>
);

export default HandBackPointUp;