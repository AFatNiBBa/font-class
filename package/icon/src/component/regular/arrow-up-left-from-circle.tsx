
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=regular arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184 0L24 0C10.7 0 0 10.7 0 24L0 184c0 13.3 10.7 24 24 24s24-10.7 24-24L48 81.9 295 329c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L81.9 48 184 48c13.3 0 24-10.7 24-24s-10.7-24-24-24zM288 64c-13.3 0-24 10.7-24 24s10.7 24 24 24c97.2 0 176 78.8 176 176s-78.8 176-176 176s-176-78.8-176-176c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;