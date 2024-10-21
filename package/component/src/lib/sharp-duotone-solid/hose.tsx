
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hose` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=sharp-duotone-solid hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 79.5 64.5 144 144 144l272 0 32 0 0-64-32 0-272 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l144 0 0-64L144 32C64.5 32 0 96.5 0 176zM0 352l0 64 32 0 384 0 32 0 0-64-32 0L32 352 0 352zm0 96l0 64 32 0 384 0 32 0 0-64-32 0L32 448 0 448z" />
        <path d="M288 128l0-24 0-80 0-24 48 0 0 24 0 2.3 80 11.4L416 24l32 0 0 16 0 48 0 16-32 0 0-13.7-80 11.4 0 2.3 0 24-48 0z" />
    </Icon>
);

export default Hose;