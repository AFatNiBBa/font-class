
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=sharp-solid xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 32l384 0 0 352L96 384 96 32zM369 161l17-17L352 110.1l-17 17-47 47-47-47-17-17L190.1 144l17 17 47 47-47 47-17 17L224 305.9l17-17 47-47 47 47 17 17L385.9 272l-17-17-47-47 47-47zM0 288l64 0 0 128 448 0 0-128 64 0 0 192L0 480 0 288z" />
    </Icon>
);

export default XmarkToSlot;