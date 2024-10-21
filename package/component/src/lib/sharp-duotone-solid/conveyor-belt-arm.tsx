
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt-arm` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-arm?s=sharp-duotone-solid conveyor-belt-arm}
 * @preview ![conveyor-belt-arm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/conveyor-belt-arm.svg)
 */
const ConveyorBeltArm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96l-32 0-96 0-64 0-96 0-64 0-96 0c-53 0-96 43-96 96zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M128 0l32 0L320 0l32 0 0 64-32 0-52.9 0-5.7 34c.8 1 1.5 2 2.3 3l204.5 27.3 11.8 1.6 0 64.6 0 13.6 0 16s0 0 0 0l-32 0 0-16 0-17.9L255.2 164.4c-8.4 7.2-19.3 11.6-31.2 11.6c-26.5 0-48-21.5-48-48c0-17.1 8.9-32 22.3-40.6L202.2 64 160 64l-32 0 0-64zm96 144a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM96 256l96 0 0 64-96 0 0-64zm256 0l0 64-96 0 0-64 96 0zm160 0l0 64-96 0 0-64 96 0z" />
    </Icon>
);

export default ConveyorBeltArm;