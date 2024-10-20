
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent-arrow-left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent-arrow-left-right?s=sharp-duotone-solid tent-arrow-left-right}
 * @preview ![tent-arrow-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tent-arrow-left-right.svg)
 */
const TentArrowLeftRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 512l224 0 0-160 96 160 128 0L480 288 288 160 96 288 64 512z" />
        <path d="M126.7 35.2l-17 17L89.9 72l396.1 0L466.2 52.2l-17-17L483.2 1.3l17 17L561 79l17 17-17 17-60.8 60.8-17 17-33.9-33.9 17-17L486.1 120 89.9 120l19.8 19.8 17 17L92.8 190.7l-17-17L15 113l-17-17L15 79 75.8 18.2l17-17 33.9 33.9z" />
    </Icon>
);

export default TentArrowLeftRight;