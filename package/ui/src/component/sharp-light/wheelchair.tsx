
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=sharp-light wheelchair}
 * @preview ![wheelchair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wheelchair.svg)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80A56 56 0 1 0 176 0a56 56 0 1 0 0 112zM131.5 227.2L124.5 196C53.2 212.1 0 275.8 0 352c0 88.4 71.6 160 160 160c69.7 0 128.9-44.5 150.9-106.7l-30.2-10.7C263.1 444.4 215.7 480 160 480C89.3 480 32 422.7 32 352c0-60.9 42.5-111.9 99.5-124.8zm68.1-70.7l-3.5-15.6-31.2 7.1 3.5 15.6 34.3 151.1c5 21.9 24.4 37.4 46.8 37.4l108.6 0 59.6 119.2 7.2 14.3 14.3-7.2 64-32-14.3-28.6-49.7 24.8L382.3 328.8l-4.4-8.8-9.9 0-118.5 0c-7.5 0-13.9-5.2-15.6-12.5L215 224l137 0 16 0 0-32-16 0-144.3 0-8.1-35.5z" />
    </Icon>
);

export default Wheelchair;