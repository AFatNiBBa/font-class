
import { Icon, generic } from "../../index";

/**
 * A component that renders the `4` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/4?s=duotone 4}
 * @preview ![4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/4.svg)
 */
const $4: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368l224 0 0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-144c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L82.4 304 189 77.6z" />
    </Icon>
);

export default $4;