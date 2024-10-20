
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-big-small` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-big-small?s=sharp-thin arrow-up-big-small}
 * @preview ![arrow-up-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-big-small.svg)
 */
const ArrowUpBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l16 0 192 0 16 0 0 16 0 192 0 16-16 0-192 0-16 0 0-16 0-192 0-16zM528 240l0-192L336 48l0 192 192 0zM160 36.7l5.7 5.7 104 104 5.7 5.7L264 163.3l-5.7-5.7L168 67.3 168 472l0 8-16 0 0-8 0-404.7L61.7 157.7 56 163.3 44.7 152l5.7-5.7 104-104 5.7-5.7zM336 320l128 0 16 0 0 16 0 128 0 16-16 0-128 0-16 0 0-16 0-128 0-16 16 0zm128 16l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default ArrowUpBigSmall;