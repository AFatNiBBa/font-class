
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=sharp-duotone-solid arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 357.5 0c10.7-10.7 21.3-21.3 32-32c-10.7-10.7-21.3-21.3-32-32L32 224 0 224z" />
        <path d="M512 256l-22.6-22.6-128-128L338.7 82.7 293.5 128l22.6 22.6L421.5 256 316.1 361.4 293.5 384l45.3 45.3 22.6-22.6 128-128L512 256z" />
    </Icon>
);

export default ArrowRightLong;