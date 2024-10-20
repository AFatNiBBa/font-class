
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=sharp-duotone-solid arrow-left}
 * @preview ![arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-left.svg)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M93.3 256c10.7-10.7 21.3-21.3 32-32L416 224l32 0 0 64-32 0-290.7 0c-10.7-10.7-21.3-21.3-32-32z" />
        <path d="M2.7 256l22.6-22.6 144-144L192 66.7 237.3 112l-22.6 22.6L93.3 256 214.6 377.4 237.3 400 192 445.3l-22.6-22.6-144-144L2.7 256z" />
    </Icon>
);

export default ArrowLeft;