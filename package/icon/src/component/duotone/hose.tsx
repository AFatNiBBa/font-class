
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hose` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=duotone hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 79.5 64.5 144 144 144l272 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-272 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l144 0 0-64L144 32C64.5 32 0 96.5 0 176zM0 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 352c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z" />
        <path d="M312 128c-13.3 0-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24l0 2.3 80.2 11.5C417.3 30 423.9 24 432 24c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16c-8.1 0-14.7-6-15.8-13.7L336 101.7l0 2.3c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default Hose;