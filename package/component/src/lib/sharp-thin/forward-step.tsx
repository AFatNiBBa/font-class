
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-thin forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 72l0-8 16 0 0 8 0 176 0 16 0 176 0 8-16 0 0-8 0-164.5L48 436.5 32 448l0-19.7L32 83.7 32 64 48 75.5l224 161L272 72zm-.3 184L48 95.2l0 321.6L271.7 256z" />
    </Icon>
);

export default ForwardStep;