
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-rifle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rifle?s=sharp-duotone-solid person-rifle}
 * @preview ![person-rifle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-rifle.svg)
 */
const PersonRifle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M1.2 422.1l68.9 40.7 20.3-34.4L144 337.7 144 512l192 0 0-320-16 0-160 0-22.8 0-11.6 19.7-104 176L1.2 422.1zM160 80a80 80 0 1 0 160 0A80 80 0 1 0 160 80z" />
        <path d="M448 0l16 0 0 128 16 0 0 141.3 16-5.3 0-72 48 0 0 112-64 21.3 0 26.7 64 0 0 48-60 0 28 112-96 0 0-112-48 0 0-208 32 0 0-64 16 0 0-96-16 0 0-32 16 0 32 0z" />
    </Icon>
);

export default PersonRifle;