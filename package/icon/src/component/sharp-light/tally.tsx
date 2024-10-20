
import { Icon } from "../../index";

/**
 * A component that renders the `tally` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally?s=sharp-light tally}
 * @preview ![tally](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tally.svg)
 */
const Tally: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 32l0 16 0 249.8 96-32L240 48l0-16 32 0 0 16 0 207.1 96-32L368 48l0-16 32 0 0 16 0 164.5 96-32L496 48l0-16 32 0 0 16 0 121.8 74.9-25 15.2-5.1 10.1 30.4-15.2 5.1L528 203.5 528 464l0 16-32 0 0-16 0-249.8-96 32L400 464l0 16-32 0 0-16 0-207.1-96 32L272 464l0 16-32 0 0-16 0-164.5-96 32L144 464l0 16-32 0 0-16 0-121.8-74.9 25-15.2 5.1L11.8 341.9l15.2-5.1L112 308.5 112 48l0-16 32 0z" />
    </Icon>
);

export default Tally;