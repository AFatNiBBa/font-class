
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-thin backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 72l0-8L32 64l0 8 0 176 0 16 0 176 0 8 16 0 0-8 0-164.5 224 161L288 448l0-19.7 0-344.6L288 64 272 75.5 48 236.5 48 72zm.3 184L272 95.2l0 321.6L48.3 256z" />
    </Icon>
);

export default BackwardStep;