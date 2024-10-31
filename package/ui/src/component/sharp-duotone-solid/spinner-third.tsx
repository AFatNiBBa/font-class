
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=sharp-duotone-solid spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c94.7 0 177.5-51.5 221.7-128l-55.4-32c-33.2 57.4-95.2 96-166.3 96C150 448 64 362 64 256S150 64 256 64l0-64C114.6 0 0 114.6 0 256z" />
        <path d="M477.7 384c21.8-37.7 34.3-81.4 34.3-128C512 114.6 397.4 0 256 0l0 64c106 0 192 86 192 192c0 35-9.4 67.8-25.7 96l55.4 32z" />
    </Icon>
);

export default SpinnerThird;