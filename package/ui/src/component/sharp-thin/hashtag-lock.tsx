
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=sharp-thin hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M353.6 32L370 32 345.1 144l100.8 0-3.2 16-101.2 0L298.9 352l21.1 0 0 16-24.7 0L270.4 480 254 480l24.9-112-175.6 0L78.4 480 62 480 86.9 368 2.1 368l3.2-16 85.2 0 42.7-192-89.5 0 3.2-16 89.8 0L161.6 32 178 32 153.1 144l175.6 0L353.6 32zM149.5 160L106.9 352l175.6 0 42.7-192-175.6 0zM464 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64zm-32 80l0 160 192 0 0-160-32 0-16 0-96 0-16 0-32 0z" />
    </Icon>
);

export default HashtagLock;