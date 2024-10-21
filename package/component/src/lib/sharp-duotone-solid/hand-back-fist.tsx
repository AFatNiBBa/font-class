
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-back-fist` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-fist?s=sharp-duotone-solid hand-back-fist}
 * @preview ![hand-back-fist](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-back-fist.svg)
 */
const HandBackFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M192 0L96 0l0 80 0 16 0 32 0 48 0 16-32 0 0-16 0-48-32 0 0 105.5c0 44.7 19.8 87 54.1 115.6c12.6 10.5 26.8 18.8 41.9 24.7L128 512l224 0 0-137.3c46.9-19 80-65 80-118.7l0-32 0-96 0-32-80 0 0-32-80 0 0-32-80 0 0-32z" />
    </Icon>
);

export default HandBackFist;