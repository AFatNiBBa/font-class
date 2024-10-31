
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spoon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=duotone spoon}
 * @preview ![spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spoon.svg)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160.2C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8c-2.4-2-4.7-4.1-6.9-6.3l-32-32c-2.2-2.2-4.3-4.6-6.3-6.9c-14.5-17.6-21.8-39.2-21.8-60.8z" />
        <path d="M245.8 220.9c2 2.4 4.1 4.7 6.3 6.9l32 32c2.2 2.2 4.6 4.3 6.9 6.3L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z" />
    </Icon>
);

export default Spoon;