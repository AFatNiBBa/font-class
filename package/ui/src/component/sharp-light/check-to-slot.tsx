
import { Icon } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=sharp-light check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 64l0 320 320 0 0-320L128 64zm352 0l0 320 16 0 16 0 0 32-16 0-16 0-32 0-320 0-32 0-16 0-16 0 0-32 16 0 16 0L96 64l0-32 32 0 320 0 32 0 0 32zM32 320l32 0 0 32-32 0 0 96 512 0 0-96-32 0 0-32 32 0 32 0 0 32 0 96 0 32-32 0L32 480 0 480l0-32 0-96 0-32 32 0zM379.3 174L272.6 280.6 261.3 292 250 280.6l-53.3-53.3L185.4 216 208 193.4l11.3 11.3 42 42 95.4-95.4L368 140l22.6 22.6L379.3 174z" />
    </Icon>
);

export default CheckToSlot;