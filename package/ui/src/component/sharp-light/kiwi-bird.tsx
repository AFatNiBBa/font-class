
import { Icon } from "../../index";

/**
 * A component that renders the `kiwi-bird` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=sharp-light kiwi-bird}
 * @preview ![kiwi-bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/kiwi-bird.svg)
 */
const KiwiBird: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M331.6 304L322 317.3C292.9 357.8 245.5 384 192 384c-22.8 0-44.4-4.7-64-13.3l0-2.7-5.8 0C68.8 342.1 32 287.3 32 224c0-88.4 71.6-160 160-160c53.5 0 100.9 26.2 130 66.7l9.6 13.3 16.4 0 116 0c44.2 0 80 35.8 80 80l0 80-196 0-16.4 0zm180.1 32l32.4 0 0 44-32.4-44zM348 336l123.9 0 75.2 102.3L576 477.6l0-48.8 0-92.8 0-32 0-80c0-61.9-50.1-112-112-112l-116 0c-34.9-48.5-91.7-80-156-80C86 32 0 118 0 224c0 71.1 38.6 133.1 96 166.3L96 464l0 16 32 0 0-16 0-58.9c20 7.1 41.6 10.9 64 10.9c10.9 0 21.6-.9 32-2.7l0 50.7 0 16 32 0 0-16 0-58.9c37.3-13.2 69.3-37.5 92-69.1zm100-88a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default KiwiBird;