
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=sharp-duotone-solid ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M92.9 72.6L99 83.7l30.4 54.8c19.6-6.8 40.7-10.4 62.6-10.4c1.4 0 2.7 0 4.1 0s2.7 .1 4.1 .1c2.7 .1 5.4 .3 8.1 .5c5.4 .4 10.7 1.1 15.9 2c10.4 1.8 20.6 4.4 30.4 7.7L285 83.7l6.1-11.1-5.7-11.3-24-48L254.8 0 240 0 144 0 129.2 0l-6.6 13.3-24 48L92.9 72.6z" />
        <path d="M192 192a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM384 320A192 192 0 1 1 0 320a192 192 0 1 1 384 0z" />
    </Icon>
);

export default RingDiamond;