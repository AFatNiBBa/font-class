
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-duotone-solid backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32 0-160L64 96l0-32L0 64z" />
        <path d="M320 64V448L64 256 320 64z" />
    </Icon>
);

export default BackwardStep;