
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lasso` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lasso?s=duotone lasso}
 * @preview ![lasso](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lasso.svg)
 */
const Lasso: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M576 176c0 97.2-128.9 176-288 176c-13.2 0-26.3-.5-39-1.6c4.6 12.8 7 26.5 7 40.6c0 66.8-54.2 121-121 121l-71 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l71 0c31.5 0 57-25.5 57-57c0-21.6-12.2-41.3-31.5-51l-46.8-23.4 .2-.4C44.7 284.1 0 233.2 0 176C0 78.8 128.9 0 288 0S576 78.8 576 176zM288 288c123.7 0 224-50.1 224-112s-100.3-112-224-112S64 114.1 64 176s100.3 112 224 112z" />
    </Icon>
);

export default Lasso;