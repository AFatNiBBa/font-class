
import { Icon } from "../../index";

/**
 * A component that renders the `h3` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=sharp-light h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80l0-16L0 64 0 80 0 256 0 432l0 16 32 0 0-16 0-160 256 0 0 160 0 16 32 0 0-16 0-176 0-176 0-16-32 0 0 16 0 160L32 240 32 80zM600 64L400 64l-16 0 0 32 16 0 160 0L421 228.4l-5 4.7 0 22.9 16 0 96 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-71.4 0c-19.9 0-36.8-14.6-39.6-34.3l-1.1-7.9-31.7 4.5 1.1 7.9c5.1 35.5 35.4 61.8 71.3 61.8l71.4 0c56.4 0 103.1-41.7 110.9-96l1.1 0 0-16c0-61.9-50.1-112-112-112l-56 0L611 91.6l5-4.7L616 64l-16 0z" />
    </Icon>
);

export default H3;