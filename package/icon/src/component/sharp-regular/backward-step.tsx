
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=sharp-regular backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 88l0-24L32 64l0 24 0 144 0 48 0 144 0 24 48 0 0-24 0-114.4L256 418.4 304 448l0-56.4 0-271.2L304 64 256 93.6 80 202.4 80 88zm4.5 168L256 150.1l0 211.9L84.5 256z" />
    </Icon>
);

export default BackwardStep;