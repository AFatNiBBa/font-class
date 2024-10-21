
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-tongue` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-tongue?s=sharp-duotone-solid face-smile-tongue}
 * @preview ![face-smile-tongue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-tongue.svg)
 */
const FaceSmileTongue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c61.5 0 118-21.7 162.1-57.9c-2.8-1.2-5.5-2.7-8.2-4.2l-68.1-40.4C316.3 423.8 287.1 432 256 432c-84.1 0-154-59.7-175.5-139.9l30.9-8.3C129.5 351.5 187.9 400 256 400s126.5-48.5 144.5-116.1l5.4-20.2L424 274.1l65.7 37.9c5 2.9 9.6 6.2 13.7 10c5.6-21.1 8.6-43.2 8.6-66C512 114.6 397.4 0 256 0S0 114.6 0 256zm120-24c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M176 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm160 0c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm34.6 237.3c24-20.4 42.8-47.1 54.5-77.6l48.6 28.1c23 13.3 30.8 42.6 17.6 65.6c-13.2 22.8-42.4 30.4-65 17l-55.7-33.1z" />
    </Icon>
);

export default FaceSmileTongue;