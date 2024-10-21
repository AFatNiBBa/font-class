
import { Icon } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=light car-wrench}
 * @preview ![car-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/car-wrench.svg)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M88 40c22 0 41 12.6 50.2 31.1l4.4 8.9 9.9 0 207 0 9.9 0 4.4-8.9C383 52.6 402 40 424 40c25.4 0 46.8 16.9 53.7 40L432 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l45.7 0c-6.9 23.1-28.3 40-53.7 40c-22 0-41-12.6-50.2-31.1l-4.4-8.9-9.9 0-207 0-9.9 0-4.4 8.9C129 139.4 110 152 88 152c-25.4 0-46.8-16.9-53.7-40L80 112c8.8 0 16-7.2 16-16s-7.2-16-16-16L34.3 80C41.2 56.9 62.6 40 88 40zM0 96c0 48.6 39.4 88 88 88c30.9 0 58.1-15.9 73.8-40l188.5 0c15.7 24.1 42.9 40 73.8 40c48.6 0 88-39.4 88-88s-39.4-88-88-88c-30.9 0-58.1 15.9-73.8 40L161.8 48C146.1 23.9 118.9 8 88 8C39.4 8 0 47.4 0 96zM188.2 208l135.6 0c14.3 0 26.8 9.5 30.8 23.2L370.8 288c-.9 0-1.9 0-2.8 0l-224 0c-.9 0-1.9 0-2.8 0l16.2-56.8c3.9-13.7 16.5-23.2 30.8-23.2zm-61.5 14.4L105 298.1C80.6 311.8 64 338 64 368l0 48 0 16 0 32 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 320 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 0-32 0-16 0-48c0-30-16.6-56.2-41-69.9l-21.6-75.7c-7.8-27.5-33-46.4-61.5-46.4l-135.6 0c-28.6 0-53.7 18.9-61.5 46.4zM416 416l0 16L96 432l0-16 0-48c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 48zM144 400a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm248-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CarWrench;