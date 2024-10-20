
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=light arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M203.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-176 176c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 86.6 176 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-377.4L356.7 235.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-176-176z" />
    </Icon>
);

export default ArrowUp;