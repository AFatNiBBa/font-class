
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=duotone bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 352l0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0 64 96 0 0 224-224 0 0-96-64 0z" />
        <path d="M0 288c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V288z" />
    </Icon>
);

export default BringForward;