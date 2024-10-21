
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=regular triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 43.3c-21.3 5.9-40 19.5-52.1 38.7L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94L450 512c51.9 0 94-42.1 94-94c0-17.8-5-35.2-14.5-50.2L448.2 239l-34.8 34.8 75.5 119.5c4.6 7.4 7.1 15.9 7.1 24.6c0 25.4-20.6 46-46 46L126 464c-25.4 0-46-20.6-46-46c0-8.7 2.5-17.2 7.1-24.6L252.4 131.6c7.7-12.2 21.1-19.6 35.6-19.6s27.9 7.4 35.6 19.6l46 72.9-62.8 62.8c-5.9-2.1-12.2-3.2-18.8-3.2c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8l55.1-55.1 34.8-34.8L537 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-98.6 98.6L364.1 106C352 86.8 333.3 73.2 312 67.3L312 24z" />
    </Icon>
);

export default TriangleInstrument;