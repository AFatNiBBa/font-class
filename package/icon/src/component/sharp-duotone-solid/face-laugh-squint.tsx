
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-laugh-squint` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-squint?s=sharp-duotone-solid face-laugh-squint}
 * @preview ![face-laugh-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-laugh-squint.svg)
 */
const FaceLaughSquint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96.8 32l318.4 0c-8 80.9-76.2 144-159.2 144s-151.2-63.1-159.2-144zM112 112l118.9 64L112 240l45.7-64L112 112zm169.1 64L400 112l-45.7 64L400 240 281.1 176z" />
        <path d="M230.9 176L112 112l45.7 64L112 240l118.9-64zm50.3 0L400 240l-45.7-64L400 112 281.1 176z" />
    </Icon>
);

export default FaceLaughSquint;