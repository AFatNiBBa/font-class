
import { Icon } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=light engine-warning}
 * @preview ![engine-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/engine-warning.svg)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 80c0 8.8-7.2 16-16 16l-80 0 0 32 16 0 60.6 0c12.6 0 25 3.7 35.5 10.7L483.5 173c17.8 11.9 28.5 31.9 28.5 53.3L512 384c0 35.3-28.7 64-64 64l-193.2 0c-19.4 0-37.8-8.8-50-24l-32-40L144 384c-26.5 0-48-21.5-48-48l0-64-8 0-56 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 160c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 56 0 8 0 0-64c0-26.5 21.5-48 48-48l16 0 128 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0c8.8 0 16 7.2 16 16zM304 160l-144 0-16 0c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l28.8 0c9.7 0 18.9 4.4 25 12l32 40c6.1 7.6 15.3 12 25 12L448 416c17.7 0 32-14.3 32-32l0-157.7c0-10.7-5.3-20.7-14.2-26.6l-51.4-34.3c-5.3-3.5-11.4-5.4-17.8-5.4L336 160l-32 0s0 0 0 0s0 0 0 0zm304 64l-32 0 0 192 32 0 0-192zm-32-32l32 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm-272 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zM280 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default EngineWarning;