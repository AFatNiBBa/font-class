
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-left?s=regular arrow-rotate-left}
 * @preview ![arrow-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-rotate-left.svg)
 */
const ArrowRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 224c-13.3 0-24-10.7-24-24L16 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80.1 20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2s0 0 0 0L93.1 176l90.9 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L40 224z" />
    </Icon>
);

export default ArrowRotateLeft;