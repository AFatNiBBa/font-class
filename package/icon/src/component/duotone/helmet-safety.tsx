
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=duotone helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6L544 384 32 384l-15.4 0C7.4 384 0 391.4 0 400.6z" />
        <path d="M224 64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 2.3 0 99.6c0 5.6 4.5 10.1 10.1 10.1c3.6 0 7-1.9 8.8-5.1l48-83.9C492.3 123.1 543.1 198.4 544 285.6l0 98.4L32 384l0-96c0-88.2 51-164.5 125.1-201l48 83.9c1.8 3.2 5.2 5.1 8.8 5.1c5.6 0 10.1-4.5 10.1-10.1l0-99.6 0-2.3z" />
    </Icon>
);

export default HelmetSafety;