
import { Icon, generic } from "../../index";

/**
 * A component that renders the `panel-ews` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panel-ews?s=sharp-duotone-solid panel-ews}
 * @preview ![panel-ews](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/panel-ews.svg)
 */
const PanelEws: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 288l16 0c44.2 0 80 35.8 80 80l0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32-32 0 0-96 96 0 0 96-32 0 0 32c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-16c0-26.5-21.5-48-48-48L0 320 0 512l512 0L512 0 0 0zM96 64l16 0 96 0 16 0 0 32-16 0-96 0L96 96l0-32zm0 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zM288 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 128l128 0 0 192-128 0 0-192z" />
        <path d="M288 256l128 0 0 192-128 0 0-192zM0 288l16 0c44.2 0 80 35.8 80 80l0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32-32 0 0-96 96 0 0 96-32 0 0 32c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-16c0-26.5-21.5-48-48-48L0 320l0-32z" />
    </Icon>
);

export default PanelEws;