
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-squint` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-squint?s=sharp-duotone-solid face-grin-squint}
 * @preview ![face-grin-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-squint.svg)
 */
const FaceGrinSquint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 46.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2zM112 144l118.9 64L112 272l45.7-64L112 144zm169.1 64L400 144l-45.7 64L400 272 281.1 208z" />
        <path d="M230.9 208L112 144l45.7 64L112 272l118.9-64zm50.3 0L400 272l-45.7-64L400 144 281.1 208z" />
    </Icon>
);

export default FaceGrinSquint;