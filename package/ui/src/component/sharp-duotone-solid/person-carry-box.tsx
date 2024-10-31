
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-carry-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-carry-box?s=sharp-duotone-solid person-carry-box}
 * @preview ![person-carry-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-carry-box.svg)
 */
const PersonCarryBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 96l0 128 32 0 32 0 0 64 128 0 0-192L192 96z" />
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM0 346.5l64 64L64 480s0 0 0 0l0 32L0 512l0-32L0 346.5zM0 128l32 0 48 0 17.1 0 9.5 14.3L161.1 224l62.9 0 32 0 0 64-32 0-80 0-17.1 0-9.5-14.3L96 241.7l0 65.1 54.6 54.6 7.3 7.3 1.7 10.1 8 48 4 24 4 24s0 0 0 0l4 24 2.2 13.3-64.9 0-.5-2.7-4-24s0 0 0 0l-4-24-4-24-6.3-37.9L41.4 342.6 18.7 320C6.7 308 0 291.7 0 274.7L0 160l0-32z" />
    </Icon>
);

export default PersonCarryBox;