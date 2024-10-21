
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-bolt-moon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt-moon?s=duotone cloud-bolt-moon}
 * @preview ![cloud-bolt-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-bolt-moon.svg)
 */
const CloudBoltMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 368c0 1.8 .3 3.6 .9 5.3c2.2 6.4 8.3 10.7 15.1 10.7l70.1 0L129.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.3-19.6s-14.2-4.7-20.1-.1l-160 128c-3.9 3.1-6 7.7-6 12.5zM361.4 79.9c31.2 18.7 52.5 52.2 54.3 90.8c33.3 15.8 57.6 47.5 63 85.3c.8 0 1.6 0 2.4 0c34.9 0 66.7-13.8 89.9-36.1c3.2-3.1 4.9-7.3 4.9-11.5c0-2.4-.6-4.9-1.7-7.2c-3.2-6.3-10.1-9.7-17-8.6c-4.9 .8-10 1.3-15.2 1.3c-49 0-88.4-39.3-88.4-87.4c0-32.6 18-61.1 44.9-76.1c6.1-3.4 9.3-10.5 7.8-17.4s-7.3-12-14.3-12.6c-3.6-.3-7.3-.5-10.9-.5C427.1 0 380.6 33 361.4 79.9z" />
        <path d="M447.9 271.9c0 44.2-35.8 80-80 80l-18.7 0C342.4 332.8 324.3 320 304 320l-18.3 0 29.3-58.5c10.1-20.2 4.8-44.6-12.8-58.8s-42.6-14.2-60.2-.2L82 330.5c-6 4.8-10.5 10.7-13.6 17.4C28.8 336 0 299.4 0 255.9c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
    </Icon>
);

export default CloudBoltMoon;