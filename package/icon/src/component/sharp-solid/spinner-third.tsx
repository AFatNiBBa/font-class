
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=sharp-solid spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0l0 64c106 0 192 86 192 192c0 35-9.4 67.8-25.7 96l55.4 32z" />
    </Icon>
);

export default SpinnerThird;