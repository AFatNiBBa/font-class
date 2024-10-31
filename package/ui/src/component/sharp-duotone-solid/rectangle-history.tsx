
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=sharp-duotone-solid rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 80l0 48 416 0 0-48L48 80zM96 0l0 48 320 0 0-48L96 0z" />
        <path d="M512 160l0 352L0 512 0 160l512 0z" />
    </Icon>
);

export default RectangleHistory;