
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=regular integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M216 48c-17.7 0-32 14.3-32 32l0 352c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16c0-13.3 10.7-24 24-24s24 10.7 24 24l0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352c0-44.2 35.8-80 80-80s80 35.8 80 80l0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default Integral;