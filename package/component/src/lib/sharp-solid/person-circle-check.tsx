
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-check?s=sharp-solid person-circle-check}
 * @preview ![person-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-circle-check.svg)
 */
const PersonCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM91.4 128l17.5 0 102.2 0 17.5 0 9.4 14.8 66.4 104c-15.5 16.3-28 35.7-36.3 57l-2.3 1.4-33.8-53L232 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-227.8-33.8 53L.2 270.8 82 142.8 91.4 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm222.6-32L488 313.4l-11.3 11.3L416 385.4l-28.7-28.7L376 345.4 353.4 368l11.3 11.3 40 40L416 430.6l11.3-11.3 72-72L510.6 336z" />
    </Icon>
);

export default PersonCircleCheck;