
import { Icon, generic } from "../../index";

/**
 * A component that renders the `integral` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=duotone integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M216 64c-13.3 0-24 10.7-24 24l0 336c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-8c0-17.7 14.3-32 32-32s32 14.3 32 32l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-336c0-48.6 39.4-88 88-88s88 39.4 88 88l0 8c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-8c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default Integral;