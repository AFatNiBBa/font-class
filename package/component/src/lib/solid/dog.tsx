
import { Icon } from "../../index";

/**
 * A component that renders the `dog` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dog?s=solid dog}
 * @preview ![dog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dog.svg)
 */
const Dog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32l52.1 0c12.7 0 24.9 5.1 33.9 14.1L496 64l56 0c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-32 0-16 0-21.3 0-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-115.2c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-230.2c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192l30 0 16 0 159.8 0L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Dog;