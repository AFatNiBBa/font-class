
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=sharp-duotone-solid bug}
 * @preview ![bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bug.svg)
 */
const Bug: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96l0 32 192 0 0-32c0-53-43-96-96-96s-96 43-96 96zm80 128l0 16 0 239.2c5.3 .5 10.6 .8 16 .8s10.7-.3 16-.8L272 240l0-16-32 0z" />
        <path d="M64 82.7l22.6 22.6L141.3 160l229.5 0 54.6-54.6L448 82.7 493.3 128l-22.6 22.6L416 205.3l0 50.7 64 0 32 0 0 64-32 0-64 0c0 24.2-5.4 47.2-15 67.7l53.6 53.6L477.3 464 432 509.3l-22.6-22.6-47.1-47.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240l0-16-32 0 0 16 0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6l-47.1 47.1L80 509.3 34.7 464l22.6-22.6L111 387.7c-9.6-20.6-15-43.5-15-67.7l-64 0L0 320l0-64 32 0 64 0 0-50.7L41.4 150.6 18.7 128 64 82.7z" />
    </Icon>
);

export default Bug;