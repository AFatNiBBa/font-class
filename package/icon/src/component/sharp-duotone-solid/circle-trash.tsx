
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-duotone-solid circle-trash}
 * @preview ![circle-trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-trash.svg)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 128l16 0 41.4 0 11.3-11.3 4.7-4.7 6.6 0 64 0 6.6 0 4.7 4.7L310.6 128l41.4 0 16 0 0 32-16 0-192 0-16 0 0-32zm16 64l192 0L336 384l-160 0L160 192z" />
        <path d="M217.4 112l-4.7 4.7L201.4 128 160 128l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-41.4 0-11.3-11.3-4.7-4.7-6.6 0-64 0-6.6 0zM160 192l16 192 160 0 16-192-192 0z" />
    </Icon>
);

export default CircleTrash;