
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=solid ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M122.5 13.3C126.6 5.1 134.9 0 144 0l96 0c9.1 0 17.4 5.1 21.5 13.3l24 48c3.5 7.1 3.4 15.5-.5 22.4l-30.4 54.8C329.9 164.4 384 235.9 384 320c0 106-86 192-192 192S0 426 0 320c0-84.1 54.1-155.6 129.4-181.6L99 83.7c-3.8-6.9-4-15.3-.5-22.4l24-48zM192 192a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" />
    </Icon>
);

export default RingDiamond;