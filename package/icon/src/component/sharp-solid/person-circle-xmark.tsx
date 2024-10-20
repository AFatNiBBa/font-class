
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-xmark?s=sharp-solid person-circle-xmark}
 * @preview ![person-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-circle-xmark.svg)
 */
const PersonCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 66.4 104c-15.5 16.3-28 35.7-36.3 57l-2.3 1.4-33.8-53L232 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53L.2 270.8 82 142.8 91.4 128zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3L502.6 320 480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7z" />
    </Icon>
);

export default PersonCircleXmark;