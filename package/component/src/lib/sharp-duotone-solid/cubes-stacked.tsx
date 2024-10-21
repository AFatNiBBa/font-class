
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cubes-stacked` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cubes-stacked?s=sharp-duotone-solid cubes-stacked}
 * @preview ![cubes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cubes-stacked.svg)
 */
const CubesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l128 0 0 128L0 480 0 352zM55 223l110.9-64 64 110.9L119 333.8 55 223zM320 352l128 0 0 128-128 0 0-128z" />
        <path d="M320 32L192 32l0 128 128 0 0-128zM256 320l128 0 0-128-128 0 0 128zm-96 32l0 128 128 0 0-128-128 0z" />
    </Icon>
);

export default CubesStacked;