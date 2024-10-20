
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=regular stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 56c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L432 80l0 120c0 13.3-10.7 24-24 24l-104 0 0 104c0 13.3-10.7 24-24 24l-104 0 0 104c0 13.3-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0 0-104c0-13.3 10.7-24 24-24l104 0 0-104c0-13.3 10.7-24 24-24l104 0 0-120z" />
    </Icon>
);

export default Stairs;