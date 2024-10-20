
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=sharp-duotone-solid school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 512l256 0 0-96c0-35.3 28.7-64 64-64l64 0 0-64 32 0 0-16c0-61.9 50.1-112 112-112s112 50.1 112 112l0-176L480 96 320 0 160 96 0 96zm80 96l64 0 0 96-64 0 0-96zm0 128l64 0 0 96-64 0 0-96zM408 176a88 88 0 1 1 -176 0 88 88 0 1 1 176 0zM304 128l0 16 0 32 0 16 16 0 32 0 16 0 0-32-16 0-16 0 0-16 0-16-32 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default SchoolLock;