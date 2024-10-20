
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-arrows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-arrows?s=sharp-duotone-solid people-arrows}
 * @preview ![people-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-arrows.svg)
 */
const PeopleArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M24 352l40 0 0 160 128 0 0-160 16 0-48-48 67.2-67.2L224 160 32 160 24 352zM64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zM412.8 236.8L480 304l-48 48 16 0 0 160 128 0 0-160 40 0-8-192-192 0-3.2 76.8zM448 64a64 64 0 1 0 128 0A64 64 0 1 0 448 64z" />
        <path d="M160 304L272 192l0 80 96 0 0-80L480 304 368 416l0-80-96 0 0 80L160 304z" />
    </Icon>
);

export default PeopleArrows;