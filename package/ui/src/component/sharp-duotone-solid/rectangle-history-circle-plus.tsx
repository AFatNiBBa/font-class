
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history-circle-plus?s=sharp-duotone-solid rectangle-history-circle-plus}
 * @preview ![rectangle-history-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-history-circle-plus.svg)
 */
const RectangleHistoryCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 512l394.8 0C349.5 480.1 320 427.5 320 368c0-97.2 78.8-176 176-176c5.4 0 10.7 .2 16 .7l0-32.7L0 160zM48 80l0 48 416 0 0-48L48 80zM96 0l0 48 320 0 0-48L96 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default RectangleHistoryCirclePlus;