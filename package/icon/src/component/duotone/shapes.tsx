
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shapes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=duotone shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384a128 128 0 1 0 256 0A128 128 0 1 0 0 384zM164.2 207.8c5.7 10 16.3 16.2 27.8 16.2l192 0c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2z" />
        <path d="M328 272c-22.1 0-40 17.9-40 40l0 144c0 22.1 17.9 40 40 40l144 0c22.1 0 40-17.9 40-40l0-144c0-22.1-17.9-40-40-40l-144 0z" />
    </Icon>
);

export default Shapes;