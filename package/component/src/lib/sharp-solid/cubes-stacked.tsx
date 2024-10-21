
import { Icon } from "../../index";

/**
 * A component that renders the `cubes-stacked` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cubes-stacked?s=sharp-solid cubes-stacked}
 * @preview ![cubes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cubes-stacked.svg)
 */
const CubesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 32l0 128 128 0 0-128L192 32zM165.8 159L55 223l64 110.9 110.9-64L165.8 159zM256 192l0 128 128 0 0-128-128 0zM448 480l0-128-128 0 0 128 128 0zM160 352l0 128 128 0 0-128-128 0zm-32 0L0 352 0 480l128 0 0-128z" />
    </Icon>
);

export default CubesStacked;