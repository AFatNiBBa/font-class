
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=sharp-duotone-solid tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l448 0 0 128L0 512 0 384zm192 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M0 0H448V384H0V0z" />
    </Icon>
);

export default TabletButton;