
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-bolt-moon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt-moon?s=sharp-duotone-solid cloud-bolt-moon}
 * @preview ![cloud-bolt-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-bolt-moon.svg)
 */
const CloudBoltMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 360l0 24 88 0L144 512 320 376l0-24-88 0 40-128L96 360zM348.3 73.1c38.1 16.5 65.1 53.8 67.2 97.5c32.9 15.7 57 47 62.6 84.5c42.5-4.8 78.6-30.6 97.9-66.8c-10.9 4.3-22.7 6.7-35.1 6.7c-52.8 0-95.6-43-95.6-96c0-41.9 26.7-77.5 64-90.6C495 3 479.6 0 463.6 0c-50.9 0-94.8 29.9-115.2 73.2z" />
        <path d="M447.9 351.9l-80 0-15.9 0 0-31.9-76.5 0 40-128-51 0L64 344.3l0 7.6-64 0 0-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7l0 80z" />
    </Icon>
);

export default CloudBoltMoon;