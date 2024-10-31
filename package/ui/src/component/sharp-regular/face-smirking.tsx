
import { Icon } from "../../index";

/**
 * A component that renders the `face-smirking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smirking?s=sharp-regular face-smirking}
 * @preview ![face-smirking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-smirking.svg)
 */
const FaceSmirking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm382.3 88.9l-1.9 4.8c-12.2 30.4-41.6 50.3-74.3 50.3L184 400l-24 0 0-48 24 0 122.1 0c13.1 0 24.9-8 29.7-20.1l1.9-4.8 8.9-22.3 44.6 17.8-8.9 22.3zM208 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32 16 0 64 0c17.7 0 32 14.3 32 32zm192 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32 16 0 64 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default FaceSmirking;