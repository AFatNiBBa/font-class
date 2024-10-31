
import { Icon } from "../../index";

/**
 * A component that renders the `face-confounded` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confounded?s=sharp-regular face-confounded}
 * @preview ![face-confounded](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-confounded.svg)
 */
const FaceConfounded: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm231 77.3l25 20 25-20 13.7-11 14.6 9.7 31.6 21.1L351 343l17-17L401.9 360l-17 17-24 24-13.9 13.9L330.7 404l-33.4-22.3-26.3 21-15 12-15-12-26.3-21L181.3 404l-16.4 10.9L151 401l-24-24-17-17L144 326.1l17 17 10.1 10.1L202.7 332l14.6-9.7 13.7 11zM112 176l118.9 64L112 304l45.7-64L112 176zm169.1 64L400 176l-45.7 64L400 304 281.1 240z" />
    </Icon>
);

export default FaceConfounded;