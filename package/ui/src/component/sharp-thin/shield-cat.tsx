
import { Icon } from "../../index";

/**
 * A component that renders the `shield-cat` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cat?s=sharp-thin shield-cat}
 * @preview ![shield-cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shield-cat.svg)
 */
const ShieldCat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M250.2 19.4l5.8-2.2 5.8 2.2L469.3 99.9l9.6 3.7 .6 10.3c2.8 47.8-4.7 121.5-36 193.6C412 379.9 356.2 451.2 262.4 491.8l-6.4 2.7-6.4-2.7C155.8 451.2 100 379.9 68.5 307.5c-31.3-72.1-38.8-145.8-36-193.6l.6-10.3 9.6-3.7L250.2 19.4zM495.5 113l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM165.7 138.3L152 124.7l0 19.3 0 128c0 57.4 46.6 104 104 104s104-46.6 104-104l0-128 0-19.3-13.7 13.7L284.7 200l-57.4 0-61.7-61.7zM168 272l0-108.7 50.3 50.3 2.3 2.3 3.3 0 64 0 3.3 0 2.3-2.3L344 163.3 344 272c0 48.6-39.4 88-88 88s-88-39.4-88-88zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ShieldCat;