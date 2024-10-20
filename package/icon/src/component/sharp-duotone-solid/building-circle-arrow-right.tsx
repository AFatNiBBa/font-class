
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-circle-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-circle-arrow-right?s=sharp-duotone-solid building-circle-arrow-right}
 * @preview ![building-circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-circle-arrow-right.svg)
 */
const BuildingCircleArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 232.2c-39.1 32.3-64 81.1-64 135.8s24.9 103.5 64 135.8l0 8.2-144 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm19.3-211.3l56 56L582.6 368l-11.3 11.3-56 56L504 446.6 481.4 424l11.3-11.3L521.4 384 432 384l-16 0 0-32 16 0 89.4 0-28.7-28.7L481.4 312 504 289.4l11.3 11.3z" />
    </Icon>
);

export default BuildingCircleArrowRight;