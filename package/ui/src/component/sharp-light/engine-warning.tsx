
import { Icon } from "../../index";

/**
 * A component that renders the `engine-warning` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=sharp-light engine-warning}
 * @preview ![engine-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/engine-warning.svg)
 */
const EngineWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 96l-16 0-80 0 0 32 16 0 80 0 96 64 0 224 0 32-32 0-256 0-51.2-64L128 384l-32 0 0-32 0-80-8 0-56 0 0 80 0 16L0 368l0-16L0 160l0-16 32 0 0 16 0 80 56 0 8 0 0-80 0-32 32 0 32 0 128 0 0-32-80 0-16 0 0-32 16 0 192 0 16 0 0 32zM304 160l-144 0-32 0 0 192 44.8 0 15.4 0 9.6 12 41.6 52L480 416l0-206.9L406.3 160 336 160l-32 0zm304 64l-32 0 0 192 32 0 0-192zm-32-32l32 0 32 0 0 32 0 192 0 32-32 0-32 0-32 0 0-32 0-192 0-32 32 0zm-256 0l0 16 0 80 0 16-32 0 0-16 0-80 0-16 32 0zM280 328l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default EngineWarning;