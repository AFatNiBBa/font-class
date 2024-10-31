
import { Icon } from "../../index";

/**
 * A component that renders the `skull-cow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=sharp-thin skull-cow}
 * @preview ![skull-cow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/skull-cow.svg)
 */
const SkullCow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M17.4 86.2c-.9 5.6-1.4 11.3-1.4 17L16 120c0 57.4 46.6 104 104 104l40 0 0-64-63 0c-41 0-75.4-31.1-79.5-71.9c-.1-.6-.1-1.2-.2-1.8zM97 144l63 0 0-32 0-16 16 0 288 0 16 0 0 16 0 32 63 0c32.8 0 60.3-24.9 63.5-57.5c.9-9-.1-18-3-26.5L592.4 26.5 606.2 19l7.5 9.3c17 21.3 26.3 47.7 26.3 75l0 16.7c0 66.3-53.7 120-120 120l-40 0 0 128 0 16-16 0-49.6 0L376 512l-112 0L225.6 384 176 384l-16 0 0-16 0-128-40 0C53.7 240 0 186.3 0 120l0-16.7C0 76 9.3 49.6 26.3 28.3L33.8 19l13.8 7.5L36.4 59.9c-2.8 8.5-3.9 17.6-3 26.5C36.8 119.1 64.2 144 97 144zm383 80l40 0c57.4 0 104-46.6 104-104l0-16.7c0-5.7-.5-11.4-1.4-17c0 .6-.1 1.2-.2 1.8C618.3 128.9 584 160 543 160l-63 0 0 64zm-16-64l0-16 0-32-288 0 0 32 0 16 0 208 49.6 0 11.9 0 3.4 11.4 35 116.6 88.2 0 35-116.6 3.4-11.4 11.9 0 49.6 0 0-208zM256 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm40 24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm64 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80z" />
    </Icon>
);

export default SkullCow;