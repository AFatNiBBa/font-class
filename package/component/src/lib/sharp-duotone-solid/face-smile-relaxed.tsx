
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-relaxed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-relaxed?s=sharp-duotone-solid face-smile-relaxed}
 * @preview ![face-smile-relaxed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-relaxed.svg)
 */
const FaceSmileRelaxed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm107.2-37.6c34.4-45.9 103.2-45.9 137.6 0c-8.6 6.4-17.1 12.8-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0c-8.5-6.4-17.1-12.8-25.6-19.2zm22.5 108.8l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 352.3 327.6 400 256 400s-113.7-47.7-126.3-72.8zM267.2 218.4c34.4-45.9 103.2-45.9 137.6 0l-25.6 19.2c-21.6-28.8-64.8-28.8-86.4 0c-8.5-6.4-17.1-12.8-25.6-19.2z" />
        <path d="M132.8 237.6c21.6-28.8 64.8-28.8 86.4 0l25.6-19.2c-34.4-45.9-103.2-45.9-137.6 0l25.6 19.2zm160 0c21.6-28.8 64.8-28.8 86.4 0l25.6-19.2c-34.4-45.9-103.2-45.9-137.6 0l25.6 19.2z" />
    </Icon>
);

export default FaceSmileRelaxed;