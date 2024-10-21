
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dog?s=sharp-duotone-solid dog}
 * @preview ![dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dog.svg)
 */
const Dog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M303.9 192c33 18.9 66.1 37.8 99.2 56.7c4.2 2.4 8.5 4.8 12.9 7.4c1.9-11.3 3.8-22.5 5.6-33.6l-112-64c-1.9 11.2-3.7 22.3-5.7 33.5z" />
        <path d="M309.6 158.5L336 0l32 0 24 32 72 0 32 32 80 0 0 48c0 44.2-35.8 80-80 80l-32 0-16 0-21.3 0-5.1 30.5-112-64zM416 256.1L416 512l-96 0 0-147.2c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2L160 512l-96 0 0-264.9c-29.1-13.6-50.5-41.4-54.8-75.1l-1-7.9-4-31.8 63.5-7.9 4 31.8 1 7.9c2 16 15.6 28 31.8 28l39.5 0 16 0 16 0 127.8 0L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Dog;