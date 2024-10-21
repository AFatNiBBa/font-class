
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=sharp-regular rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M139.8 123.8C170.8 96.5 211.5 80 256 80c97.2 0 176 78.8 176 176s-78.8 176-176 176c-39.7 0-76.2-13.1-105.6-35.2l-28.8 38.4C159 463.3 205.6 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32c-57.8 0-110.5 21.9-150.2 57.8L89.9 73.9 56 40 22.1 73.9 16 80l0 96 0 48 48 0 96 0 6.1-6.1L200 184l-33.9-33.9-26.3-26.3zM64 115.9L124.1 176 64 176l0-60.1z" />
    </Icon>
);

export default RotateLeft;