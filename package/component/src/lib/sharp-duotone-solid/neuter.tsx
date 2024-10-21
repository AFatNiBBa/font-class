
import { Icon, generic } from "../../index";

/**
 * A component that renders the `neuter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/neuter?s=sharp-duotone-solid neuter}
 * @preview ![neuter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/neuter.svg)
 */
const Neuter: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 176a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1L160 480l0 32 64 0 0-32 0-130.9z" />
    </Icon>
);

export default Neuter;