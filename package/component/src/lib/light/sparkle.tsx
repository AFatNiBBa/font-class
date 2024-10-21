
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=light sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c6.2 0 11.9 3.6 14.5 9.3l63.2 136.9 136.9 63.2c5.7 2.6 9.3 8.3 9.3 14.5s-3.6 11.9-9.3 14.5L301.8 333.8 238.5 470.7c-2.6 5.7-8.3 9.3-14.5 9.3s-11.9-3.6-14.5-9.3L146.2 333.8 9.3 270.5C3.6 267.9 0 262.2 0 256s3.6-11.9 9.3-14.5l136.9-63.2L209.5 41.3c2.6-5.7 8.3-9.3 14.5-9.3zm0 54.2L172.8 197c-1.6 3.5-4.4 6.2-7.8 7.8L54.2 256 165 307.2c3.5 1.6 6.2 4.4 7.8 7.8L224 425.8 275.2 315c1.6-3.5 4.4-6.2 7.8-7.8L393.8 256 283 204.8c-3.5-1.6-6.2-4.4-7.8-7.8L224 86.2z" />
    </Icon>
);

export default Sparkle;