
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=sharp-solid hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M308.9 32l64.9 0-16 96 74.2 0 12.9 0-5.8 34.8c-20.5 4.7-38.9 15-53.5 29.2l-38.5 0-16 96L320 288l0 96-4.9 0-16 96-64.9 0 16-96-95.1 0-16 96-64.9 0 16-96L16 384 3.1 384l10.7-64 2.2 0 84.9 0 21.3-128L48 192l-12.9 0 10.7-64 2.2 0 84.9 0 16-96 64.9 0-16 96 95.1 0 16-96zM165.8 320l95.1 0 21.3-128-95.1 0L165.8 320zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default HashtagLock;