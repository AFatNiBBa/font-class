
import { Icon } from "../../index";

/**
 * A component that renders the `x` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=light x}
 * @preview ![x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/x.svg)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M380.2 58.3c5.7-6.7 4.9-16.8-1.9-22.5s-16.8-4.9-22.6 1.9L192 231.2 28.2 37.7c-5.7-6.7-15.8-7.6-22.5-1.9s-7.6 15.8-1.9 22.5L171 256 3.8 453.7c-5.7 6.7-4.9 16.8 1.9 22.6s16.8 4.9 22.5-1.9L192 280.8 355.8 474.3c5.7 6.7 15.8 7.6 22.6 1.9s7.6-15.8 1.9-22.6L213 256 380.2 58.3z" />
    </Icon>
);

export default X;