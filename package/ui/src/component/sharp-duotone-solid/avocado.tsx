
import { Icon, generic } from "../../index";

/**
 * A component that renders the `avocado` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=sharp-duotone-solid avocado}
 * @preview ![avocado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/avocado.svg)
 */
const Avocado: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M60.9 156.9c-81.2 81.2-81.2 212.9 0 294.2s212.9 81.2 294.2 0c41.7-41.7 62-96.7 60.9-151.4l53.9-53.9c56.2-56.2 56.2-147.4 0-203.6C441.7 14.1 404.9 0 368 0s-73.7 14.1-101.8 42.2L212.3 96c-54.7-1.1-109.7 19.2-151.4 60.9zm87.5 206.7c-32.7-32.7-25.3-93 16.4-134.8C189 204.6 219.4 192 247.1 192c20.1 0 38.7 6.7 52.5 20.4s20.4 32.4 20.4 52.5c0 27.7-12.6 58.1-36.8 82.3c-41.7 41.7-102.1 49.1-134.8 16.4z" />
        <path d="M299.6 212.4c32.7 32.7 25.3 93-16.4 134.8s-102.1 49.1-134.8 16.4s-25.3-93 16.4-134.8s102.1-49.1 134.8-16.4z" />
    </Icon>
);

export default Avocado;