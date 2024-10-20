
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-beam` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-beam?s=sharp-solid face-smile-beam}
 * @preview ![face-smile-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-smile-beam.svg)
 */
const FaceSmileBeam: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM129.7 327.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 352.3 327.6 400 256 400s-113.7-47.7-126.3-72.8zM176 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm104 80c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceSmileBeam;