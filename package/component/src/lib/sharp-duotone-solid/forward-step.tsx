
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-duotone-solid forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M256 64l64 0 0 32 0 320 0 32-64 0 0-32 0-160 0-160 0-32z" />
        <path d="M0 64V448L256 256 0 64z" />
    </Icon>
);

export default ForwardStep;