
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=duotone tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l448 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64zm192 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V384H0V64z" />
    </Icon>
);

export default TabletButton;