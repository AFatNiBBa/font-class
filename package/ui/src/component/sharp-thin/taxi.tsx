
import { Icon } from "../../index";

/**
 * A component that renders the `taxi` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=sharp-thin taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 0l-8 0 0 8 0 56-48 0-6 0-1.7 5.7L58 224l-42 0L0 224l0 16L0 416l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 320 0 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16 0-176 0-16-16 0-42 0L407.7 69.7 406 64l-6 0-48 0 0-56 0-8-8 0L168 0zM496 416l-64 0-16 0L96 416l-16 0-64 0 0-176 480 0 0 176zm-64 16l64 0 0 64-64 0 0-64zM16 432l64 0 0 64-64 0 0-64zM336 64L176 64l0-48 160 0 0 48zM160 80l16 0 160 0 16 0 42 0 43.2 144L74.8 224 118 80l42 0zM96 304a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm304-32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Taxi;