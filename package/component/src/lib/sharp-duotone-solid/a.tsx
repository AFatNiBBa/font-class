
import { Icon, generic } from "../../index";

/**
 * A component that renders the `a` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=sharp-duotone-solid a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M169.9 32l44.2 0 7.8 20.6 109.3 288L384.2 480l-68.5 0-36.4-96-174.5 0L68.3 480-.2 480 52.7 340.6l109.3-288L169.9 32zm85 288L192 154.2 129 320 255 320z" />
    </Icon>
);

export default A;