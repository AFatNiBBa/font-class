
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=regular pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 21L128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l104-13 0 77L48 192l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32L0 424l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 416 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 0-208 0-32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8-184 0 0-77 104 13c17.7 0 32-14.3 32-32s-14.3-32-32-32L280 77l0-21zM48 400l0-160 208 0 208 0 0 160L48 400z" />
    </Icon>
);

export default PipeValve;