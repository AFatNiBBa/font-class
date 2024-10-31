
import { Icon, generic } from "../../index";

/**
 * A component that renders the `taxi` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taxi?s=sharp-duotone-solid taxi}
 * @preview ![taxi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/taxi.svg)
 */
const Taxi: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l96 0 0 80L0 512l0-80zM109.1 224c11.2-32 22.4-64 33.6-96l226.6 0 33.6 96-293.8 0zM160 0L352 0l0 64L160 64l0-64zM416 432l96 0 0 80-96 0 0-80z" />
        <path d="M120 64L97.3 64 89.8 85.4 41.3 224 0 224 0 432l512 0 0-208-41.3 0L422.2 85.4 414.7 64 392 64 120 64zM402.9 224l-293.8 0 33.6-96 226.6 0 33.6 96zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Taxi;