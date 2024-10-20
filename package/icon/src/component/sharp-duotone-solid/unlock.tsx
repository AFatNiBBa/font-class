
import { Icon, generic } from "../../index";

/**
 * A component that renders the `unlock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=sharp-duotone-solid unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7l57.8-27.5C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144z" />
        <path d="M0 192H448V512H0V192z" />
    </Icon>
);

export default Unlock;