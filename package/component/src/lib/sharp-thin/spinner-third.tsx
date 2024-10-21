
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=sharp-thin spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0l0 16c132.5 0 240 107.5 240 240c0 43.7-11.7 84.7-32.1 120l13.9 8z" />
    </Icon>
);

export default SpinnerThird;