
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-life` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=sharp-thin star-of-life}
 * @preview ![star-of-life](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star-of-life.svg)
 */
const StarOfLife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0l8 0 80 0 8 0 0 8 0 164.9L446.8 90.4l6.9-4 4 6.9 40 69.3 4 6.9-6.9 4L352 256l142.8 82.4 6.9 4-4 6.9-40 69.3-4 6.9-6.9-4L304 339.1 304 504l0 8-8 0-80 0-8 0 0-8 0-164.9L65.2 421.6l-6.9 4-4-6.9-40-69.3-4-6.9 6.9-4L160 256 17.2 173.6l-6.9-4 4-6.9 40-69.3 4-6.9 6.9 4L208 172.9 208 8l0-8zm16 16l0 170.7 0 13.9-12-6.9L64.2 108.3l-32 55.4L180 249.1l12 6.9-12 6.9L32.2 348.3l32 55.4L212 318.4l12-6.9 0 13.9L224 496l64 0 0-170.7 0-13.9 12 6.9 147.8 85.4 32-55.4L332 262.9 320 256l12-6.9 147.8-85.4-32-55.4L300 193.6l-12 6.9 0-13.9L288 16l-64 0z" />
    </Icon>
);

export default StarOfLife;