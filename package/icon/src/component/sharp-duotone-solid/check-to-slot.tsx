
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=sharp-duotone-solid check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 256 0 80 0 32 384 0 0-32 0-80 0-256L96 32zm70.1 176c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-42.7 42.7-85.3 85.3-128 128c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-21.3-21.3-42.7-42.7-64-64c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M409 161L281 289l-17 17-17-17-64-64-17-17L200 174.1l17 17 47 47L375 127l17-17L425.9 144l-17 17zM0 288l96 0 0 80-32 0 0 32 448 0 0-32-32 0 0-80 96 0 0 192L0 480 0 288z" />
    </Icon>
);

export default CheckToSlot;