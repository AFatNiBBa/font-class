
import { Icon } from "../../index";

/**
 * A component that renders the `face-persevering` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-persevering?s=sharp-thin face-persevering}
 * @preview ![face-persevering](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-persevering.svg)
 */
const FacePersevering: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM322.1 413.4C309.3 399.1 287.3 384 256 384s-53.3 15.1-66.1 29.4l-5.4 5.9-11.9-10.7 5.4-5.9C193.1 386 219.1 368 256 368s62.9 18 77.9 34.6l5.4 5.9-11.9 10.7-5.4-5.9zM211.3 104l-5.7 5.7-7.4 7.4c-22.4 22.4-51.2 37.2-82.5 42.5l-2.5 .4-7.9 1.3-2.6-15.8 7.9-1.3 2.5-.4c28-4.7 53.8-17.9 73.8-38l7.4-7.4 5.7-5.7L211.3 104zm95 5.7l-5.7-5.7L312 92.7l5.7 5.7 7.4 7.4c20 20 45.8 33.3 73.8 38l2.5 .4 7.9 1.3-2.6 15.8-7.9-1.3-2.5-.4c-31.3-5.2-60.1-20.1-82.5-42.5l-7.4-7.4zM132.4 221.3l7.2 3.6 80 40 14.3 7.2-14.3 7.2-80 40-7.2 3.6-7.2-14.3 7.2-3.6L198.1 272l-65.7-32.8-7.2-3.6 7.2-14.3zm240 3.6l7.2-3.6 7.2 14.3-7.2 3.6L313.9 272l65.7 32.8 7.2 3.6-7.2 14.3-7.2-3.6-80-40L278.1 272l14.3-7.2 80-40z" />
    </Icon>
);

export default FacePersevering;