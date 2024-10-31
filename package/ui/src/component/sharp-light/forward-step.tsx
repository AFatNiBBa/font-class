
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-light forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 80l0-16 32 0 0 16 0 160 0 32 0 160 0 16-32 0 0-16 0-138L64 426 32 448l0-38.8 0-306.3L32 64 64 86 256 218l0-138zm-1.2 176L64 124.8l0 262.3L254.8 256z" />
    </Icon>
);

export default ForwardStep;