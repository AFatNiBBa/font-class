
import { Icon, generic } from "../../index";

/**
 * A component that renders the `goal-net` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/goal-net?s=sharp-duotone-solid goal-net}
 * @preview ![goal-net](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/goal-net.svg)
 */
const GoalNet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 192l0 32 64 0 0 64-64 0 0 32 64 0 0 64-64 0 0 32 64 0 0 64 32 0 0-64 64 0 0 64 32 0 0-64 64 0 0 64 32 0 0-64 64 0 0 64 32 0 0-64 64 0 0-32-64 0 0-64 64 0 0-32-64 0 0-64 64 0 0-32-64 0 0-64-32 0 0 64-64 0 0-64-32 0 0 64-64 0 0-64-32 0 0 64-64 0 0-64-32 0 0 64-64 0zm96 32l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M0 32l32 0 576 0 32 0 0 32 0 384 0 32-64 0 0-32 0-352L64 96l0 352 0 32L0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default GoalNet;