
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-solid backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 96l0-32L0 64 0 96 0 416l0 32 64 0 0-32 0-160L320 448l0-384L64 256 64 96z" />
    </Icon>
);

export default BackwardStep;