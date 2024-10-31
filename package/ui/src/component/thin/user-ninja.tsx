
import { Icon } from "../../index";

/**
 * A component that renders the `user-ninja` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=thin user-ninja}
 * @preview ![user-ninja](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-ninja.svg)
 */
const UserNinja: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm16 0c0 70.7-57.3 128-128 128c-69.6 0-126.2-55.5-128-124.7L45.7 181.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L92.7 112 34.3 53.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L99.9 96.6C113.9 41.1 164.2 0 224 0c70.7 0 128 57.3 128 128zM298 317.2c6.7-8.8 18.6-11.9 28.7-7.4l13.4 5.9C405.6 344.2 448 409 448 480.5c0 17.4-14.1 31.5-31.5 31.5L31.5 512C14.1 512 0 497.9 0 480.5c0-71.5 42.4-136.3 107.9-165l13.4-5.8c10.1-4.4 22-1.4 28.7 7.5l73.9 97.2L298 317.2zM234 427.6L286 496l130.6 0c8.5 0 15.5-6.9 15.5-15.5c0-65.2-38.6-124.2-98.3-150.3l-13.4-5.9c-3.4-1.5-7.3-.5-9.6 2.5L234 427.6zM265.9 496L137.3 326.9c-2.2-2.9-6.2-4-9.6-2.5l-13.4 5.8C54.6 356.3 16 415.4 16 480.5c0 8.5 6.9 15.5 15.5 15.5l234.4 0zM160 112c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm-16 0c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default UserNinja;