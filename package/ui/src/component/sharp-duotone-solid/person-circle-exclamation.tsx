
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-exclamation?s=sharp-duotone-solid person-circle-exclamation}
 * @preview ![person-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-circle-exclamation.svg)
 */
const PersonCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.2 270.8l53.9 34.4 33.8-53L88 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 2.3-1.4c8.4-21.4 20.8-40.7 36.3-57L238 142.8 228.6 128l-17.5 0-102.2 0-17.5 0-9.4 14.8L.2 270.8zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160 48l-32 0 0 32 32 0 0-32zm0-128l0-16-32 0 0 16 0 80 0 16 32 0 0-16 0-80z" />
    </Icon>
);

export default PersonCircleExclamation;