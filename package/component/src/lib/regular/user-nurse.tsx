
import { Icon } from "../../index";

/**
 * A component that renders the `user-nurse` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse?s=regular user-nurse}
 * @preview ![user-nurse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-nurse.svg)
 */
const UserNurse: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 128l0-57.8c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30l0 57.8-.3 0c.2 2.6 .3 5.3 .3 8l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-2.7 .1-5.4 .3-8l-.3 0zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-160 0 0 16zM216 40c-4.4 0-8 3.6-8 8l0 16-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0 0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16 16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8l-16 0 0-16c0-4.4-3.6-8-8-8l-16 0zM49.3 461.9l349.4 0c-6-39.3-32.2-72-67.7-87.1l-61.7 61.7c-25 25-65.5 25-90.5 0l-61.7-61.7c-35.5 15.1-61.7 47.8-67.7 87.1zm65.1-137.1c10.1-3.1 20.9 .4 28.4 7.9l69.8 69.8c6.2 6.2 16.4 6.2 22.6 0l69.8-69.8c7.5-7.5 18.3-11 28.4-7.9C399.8 344.9 448 406.4 448 479.2c0 17-13.8 30.7-30.7 30.7l-386.6 0c-17 0-30.7-13.8-30.7-30.7c0-72.8 48.2-134.3 114.4-154.4z" />
    </Icon>
);

export default UserNurse;