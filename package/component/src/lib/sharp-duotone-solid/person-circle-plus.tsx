
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-plus?s=sharp-duotone-solid person-circle-plus}
 * @preview ![person-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-circle-plus.svg)
 */
const PersonCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.2 270.8l53.9 34.4 33.8-53L88 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 2.3-1.4c8.4-21.4 20.8-40.7 36.3-57L238 142.8 228.6 128l-17.5 0-102.2 0-17.5 0L82 142.8 .2 270.8zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default PersonCirclePlus;