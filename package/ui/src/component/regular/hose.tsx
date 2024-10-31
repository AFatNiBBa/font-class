
import { Icon } from "../../index";

/**
 * A component that renders the `hose` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hose?s=regular hose}
 * @preview ![hose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hose.svg)
 */
const Hose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M312 128c13.3 0 24-10.7 24-24l0-2.3 80.2-11.5C417.3 98 423.9 104 432 104c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16c-8.1 0-14.7 6-15.8 13.7L336 26.3l0-2.3c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24zM8 488c0 13.3 10.7 24 24 24l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L32 464c-13.3 0-24 10.7-24 24zM32 384c-13.3 0-24 10.7-24 24s10.7 24 24 24l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L32 384zM8 328c0 13.3 10.7 24 24 24l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L32 304c-13.3 0-24 10.7-24 24zM56 156c0-37.6 30.4-68 68-68l132 0 0-48L124 40C59.9 40 8 91.9 8 156s51.9 116 116 116l292 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-292 0c-37.6 0-68-30.4-68-68z" />
    </Icon>
);

export default Hose;