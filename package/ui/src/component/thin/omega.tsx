
import { Icon } from "../../index";

/**
 * A component that renders the `omega` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=thin omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48C109.1 48 16 141.1 16 256c0 75.3 40 141.3 100 177.8c7.4 4.5 12.4 12.5 12.4 21.6c0 13.6-11 24.6-24.6 24.6L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l95.7 0c4.8 0 8.6-3.9 8.6-8.6c0-3.1-1.7-6.1-4.7-7.9C43.1 408.1 0 337.1 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 81.1-43.1 152.1-107.6 191.4c-3 1.8-4.7 4.9-4.7 7.9c0 4.8 3.9 8.6 8.6 8.6l95.7 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-95.7 0c-13.6 0-24.6-11-24.6-24.6c0-9.1 5-17.1 12.4-21.6C392 397.3 432 331.3 432 256c0-114.9-93.1-208-208-208z" />
    </Icon>
);

export default Omega;