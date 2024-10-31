
import { Icon } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=sharp-solid check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 32l384 0 0 352L96 384 96 32zM425.9 144L392 110.1l-17 17-111 111-47-47-17-17L166.1 208l17 17 64 64 17 17 17-17L409 161l17-17zM0 288l64 0 0 128 448 0 0-128 64 0 0 192L0 480 0 288z" />
    </Icon>
);

export default CheckToSlot;