
import { Icon } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=sharp-regular car-wrench}
 * @preview ![car-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car-wrench.svg)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 0c32.8 0 61 19.7 73.3 48l205.3 0C371 19.7 399.2 0 432 0c12.5 0 24.4 2.9 34.9 8c19.6 9.5 34.8 26.9 41.4 48L480 56l-26.8 0L432 56l0 48 21.2 0 26.8 0 28.3 0c-6.6 21.1-21.8 38.5-41.4 48c-10.6 5.1-22.4 8-34.9 8c-32.8 0-61-19.7-73.3-48l-205.3 0C141 140.3 112.8 160 80 160c-12.5 0-24.4-2.9-34.9-8c-19.6-9.5-34.8-26.9-41.4-48L32 104l26.8 0L80 104l0-48L58.8 56 32 56 3.7 56C10.3 34.9 25.4 17.5 45.1 8C55.6 2.9 67.5 0 80 0zm55.1 160l16.9 0 208 0 16.9 0 5.7 15.9L416.9 272l47.1 0 0 48 0 80 0 16 0 32 0 64-48 0 0-64L96 448l0 64-48 0 0-64 0-32 0-16 0-80 0-48 47.1 0 34.3-96.1 5.7-15.9zM400.6 320c-.4 0-.7 0-1.1 0l-286.9 0c-.4 0-.7 0-1.1 0L96 320l0 80 320 0 0-80-15.4 0zM343.1 208l-174.2 0-22.9 64 219.9 0-22.9-64zM160 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm168 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default CarWrench;