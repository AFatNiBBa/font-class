
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=sharp-duotone-solid backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 256L512 448l0-384L256 256z" />
        <path d="M256 64V448L0 256 256 64z" />
    </Icon>
);

export default Backward;