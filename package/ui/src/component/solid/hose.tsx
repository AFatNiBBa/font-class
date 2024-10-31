
import { Icon } from "../../index";

/**
 * A component that renders the `hose` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=solid hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-2.3 80.2-11.5C417.3 98 423.9 104 432 104c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16c-8.1 0-14.7 6-15.8 13.7L336 26.3l0-2.3c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80zM64 176c0-44.2 35.8-80 80-80l112 0 0-64L144 32C64.5 32 0 96.5 0 176s64.5 144 144 144l272 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-272 0c-44.2 0-80-35.8-80-80zM32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 352zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Hose;