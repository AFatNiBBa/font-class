
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=sharp-regular spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0l0 48c114.9 0 208 93.1 208 208c0 37.9-10.1 73.4-27.8 104l41.6 24z" />
    </Icon>
);

export default SpinnerThird;