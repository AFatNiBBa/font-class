
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=sharp-duotone-solid arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 157.3c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 448l0 32-64 0 0-32 0-290.7z" />
        <path d="M192 34.8l22.6 22.6 144 144L381.3 224 336 269.3l-22.6-22.6L192 125.3 70.6 246.6 48 269.3 2.7 224l22.6-22.6 144-144L192 34.8z" />
    </Icon>
);

export default ArrowUp;