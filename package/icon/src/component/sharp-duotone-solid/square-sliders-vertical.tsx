
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-sliders-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-sliders-vertical?s=sharp-duotone-solid square-sliders-vertical}
 * @preview ![square-sliders-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-sliders-vertical.svg)
 */
const SquareSlidersVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM64 160l0 64 32 0 16 0 0 160 0 32 64 0 0-32 0-160 16 0 32 0 0-64-32 0-16 0 0-32 0-32-64 0 0 32 0 32-16 0-32 0zM224 288l0 64 32 0 16 0 0 32 0 32 64 0 0-32 0-32 16 0 32 0 0-64-32 0-16 0 0-160 0-32-64 0 0 32 0 160-16 0-32 0z" />
        <path d="M96 160l-32 0 0 64 32 0 96 0 32 0 0-64-32 0-96 0zM256 288l-32 0 0 64 32 0 96 0 32 0 0-64-32 0-96 0z" />
    </Icon>
);

export default SquareSlidersVertical;