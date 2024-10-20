
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=sharp-solid cloud-bolt}
 * @preview ![cloud-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cloud-bolt.svg)
 */
const CloudBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 320l96 0 48 0L312.6 192l51 0-40 128 76.5 0 16 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112l0 21.5C26.7 146.6 0 182.2 0 224l0 96zm232 64L192 512 368 376l0-24-88 0 40-128L144 360l0 24 88 0z" />
    </Icon>
);

export default CloudBolt;