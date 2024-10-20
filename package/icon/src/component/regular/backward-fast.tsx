
import { Icon } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=regular backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136.1L238.6 440.6c5.4 4.8 12.4 7.4 19.6 7.4c16.5 0 29.8-13.3 29.8-29.8l0-130.3L462.6 440.6c5.4 4.8 12.4 7.4 19.6 7.4c16.5 0 29.8-13.3 29.8-29.8l0-324.4C512 77.3 498.7 64 482.2 64c-7.2 0-14.2 2.6-19.6 7.4L288 224.1l0-130.3C288 77.3 274.7 64 258.2 64c-7.2 0-14.2 2.6-19.6 7.4L64 224.1 64 88c0-13.3-10.7-24-24-24S16 74.7 16 88l0 336zM464 133.9l0 244.2L324.4 256 464 133.9zM240 378.1L100.4 256 240 133.9l0 244.2z" />
    </Icon>
);

export default BackwardFast;