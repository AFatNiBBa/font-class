
import { Icon, generic } from "../../index";

/**
 * A component that renders the `split` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=sharp-duotone-solid split}
 * @preview ![split](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/split.svg)
 */
const Split: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M178.7 288L297.4 406.6l9.4 9.4 13.3 0 64 0 0 64 32 0 96-96-96-96-32 0 0 64-50.7 0-96-96-22.6 22.6c-3.1 3.1-6.2 6.2-9.4 9.4L192 288l-13.3 0z" />
        <path d="M512 128L416 32l-32 0 0 64-64 0-13.3 0-9.4 9.4L178.7 224 32 224 0 224l0 64 32 0 160 0 13.3 0 9.4-9.4L333.3 160l50.7 0 0 64 32 0 96-96z" />
    </Icon>
);

export default Split;