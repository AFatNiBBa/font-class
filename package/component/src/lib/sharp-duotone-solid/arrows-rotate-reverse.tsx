
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-rotate-reverse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-rotate-reverse?s=sharp-duotone-solid arrows-rotate-reverse}
 * @preview ![arrows-rotate-reverse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-rotate-reverse.svg)
 */
const ArrowsRotateReverse: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M44.5 330.6C55.3 361.3 73 390 97.4 414.4C141.1 458.1 198.4 480 255.8 480c57.3 0 114.6-21.9 158.4-65.6l17.6-17.5 0 35.1 0 32 64 0 0-32 0-112 0-32-32 0-112 0-32 0 0 64 32 0 34.4 0L369 369.1c-62.6 62.6-163.9 62.6-226.3 .1c-17.5-17.5-30.1-38-37.8-59.8L44.5 330.6z" />
        <path d="M406.7 202.6c-7.7-21.8-20.2-42.3-37.8-59.8c-62.5-62.5-163.8-62.5-226.3 0L125.5 160l34.3 0 32 0 0 64-32 0-112 0-32 0 0-32 0-112 0-32 64 0 0 32 0 35.2L97.4 97.6c87.5-87.5 229.3-87.5 316.8 0c24.4 24.4 42.1 53.1 52.9 83.7l-60.4 21.3z" />
    </Icon>
);

export default ArrowsRotateReverse;