
import { Icon } from "../../index";

/**
 * A component that renders the `nfc` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc?s=sharp-thin nfc}
 * @preview ![nfc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nfc.svg)
 */
const Nfc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zm64 80l0 8 0 272 0 8 8 0 272 0 8 0 0-8 0-272 0-8-8 0-136 0-8 0 0 8 0 96.8c-18.3 3.7-32 19.8-32 39.2c0 22.1 17.9 40 40 40s40-17.9 40-40c0-19.4-13.7-35.5-32-39.2l0-88.8 120 0 0 256L96 384l0-256 56 0 8 0 0-16-8 0-64 0-8 0zM224 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48z" />
    </Icon>
);

export default Nfc;