
import { Icon } from "../../index";

/**
 * A component that renders the `face-pouting` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pouting?s=sharp-regular face-pouting}
 * @preview ![face-pouting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-pouting.svg)
 */
const FacePouting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 414.6c29.1-19.3 64.9-30.6 103.6-30.6s74.5 11.4 103.6 30.6c-4.7-53-49.3-94.6-103.6-94.6s-98.8 41.6-103.6 94.6zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6 15.2 5.1 10.1-30.4-15.2-5.1-96-32-15.2-5.1-10.1 30.4 15.2 5.1 30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1 15.2-5.1-10.1-30.4-15.2 5.1-96 32-15.2 5.1 10.1 30.4 15.2-5.1 11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </Icon>
);

export default FacePouting;