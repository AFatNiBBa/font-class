
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=sharp-thin xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48l0 360 352 0 0-360L112 48zm368 0l0 360 32 0 8 0 0 16-8 0-32 0-16 0-352 0-16 0-32 0-8 0 0-16 8 0 32 0L96 48l0-16 16 0 352 0 16 0 0 16zM16 352l48 0 0 16-48 0 0 96 544 0 0-96-48 0 0-16 48 0 16 0 0 16 0 96 0 16-16 0L16 480 0 480l0-16 0-96 0-16 16 0zM217.8 142.5l5.7 5.7L288 212.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L299.3 224l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L288 235.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L276.7 224l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default XmarkToSlot;