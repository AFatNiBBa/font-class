
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=sharp-light spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0l0 32c123.7 0 224 100.3 224 224c0 40.8-10.9 79.1-30 112l27.7 16z" />
    </Icon>
);

export default SpinnerThird;