
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smirking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smirking?s=duotone face-smirking}
 * @preview ![face-smirking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-smirking.svg)
 */
const FaceSmirking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96-48c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16zm80 176c0-8.8 7.2-16 16-16l112.6 0c19.6 0 36.2-14.1 39.5-33.4l.2-1.2c1.5-8.7 9.7-14.6 18.4-13.2s14.6 9.7 13.2 18.4l-.2 1.2c-5.8 34.7-35.8 60.2-71 60.2L192 400c-8.8 0-16-7.2-16-16zM288 208c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16z" />
        <path d="M96 208c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16zm192 0c0-8.8 7.2-16 16-16l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default FaceSmirking;