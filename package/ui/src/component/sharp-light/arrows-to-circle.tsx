
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=sharp-light arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M35.3 12.7L24 1.4 1.4 24 12.7 35.3 137.4 160 80 160l-16 0 0 32 16 0 96 0 16 0 0-16 0-96 0-16-32 0 0 16 0 57.4L35.3 12.7zM320 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM448 64l0 16 0 96 0 16 16 0 96 0 16 0 0-32-16 0-57.4 0L627.3 35.3 638.6 24 616 1.4 604.7 12.7 480 137.4 480 80l0-16-32 0zM192 448l0-16 0-96 0-16-16 0-96 0-16 0 0 32 16 0 57.4 0L12.7 476.7 1.4 488 24 510.6l11.3-11.3L160 374.6l0 57.4 0 16 32 0zm256 0l32 0 0-16 0-57.4L604.7 499.3 616 510.6 638.6 488l-11.3-11.3L502.6 352l57.4 0 16 0 0-32-16 0-96 0-16 0 0 16 0 96 0 16z" />
    </Icon>
);

export default ArrowsToCircle;