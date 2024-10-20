
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=sharp-regular xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 80l0 280 288 0 0-280L144 80zM96 360L96 80l0-48 48 0 288 0 48 0 0 48 0 280 24 0 0 48-24 0-48 0-288 0-48 0-24 0 0-48 24 0zM64 288l0 48-16 0 0 96 480 0 0-96-16 0 0-48 16 0 48 0 0 48 0 96 0 48-48 0L48 480 0 480l0-48 0-96 0-48 48 0 16 0zM385.9 152l-17 17-47 47 47 47 17 17L352 313.9l-17-17-47-47-47 47-17 17L190.1 280l17-17 47-47-47-47-17-17L224 118.1l17 17 47 47 47-47 17-17L385.9 152z" />
    </Icon>
);

export default XmarkToSlot;