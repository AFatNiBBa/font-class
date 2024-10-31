
import { Icon } from "../../index";

/**
 * A component that renders the `dog-leashed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dog-leashed?s=solid dog-leashed}
 * @preview ![dog-leashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dog-leashed.svg)
 */
const DogLeashed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M122.7 4.1l160 144c6.6 5.9 7.1 16 1.2 22.6s-16 7.1-22.6 1.2l-160-144c-6.6-5.9-7.1-16-1.2-22.6s16-7.1 22.6-1.2zM144 192l112 0 0 191.3c-5.3 .5-10.6 .7-16 .7c-28.8 0-56-6.9-80-19.2L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-230.2c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192l30 0 16 0zM320 364.8c-10.1 5.2-20.8 9.4-32 12.6l0-169.3L416 262l0 218c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-115.2zM426.7 192l-6.2 37.2L305.9 180.9l26.8-161C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32l52.1 0c12.7 0 24.9 5.1 33.9 14.1L496 64l56 0c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-32 0-16 0-21.3 0zM448 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default DogLeashed;