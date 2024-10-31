
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=regular chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 48L224 48c-8.8 0-16 7.2-16 16l0 41.3c-14.8-6-31-9.3-48-9.3l0-32c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-8.3-18-19.8-34.2-33.7-48L576 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16zM412.7 139.3c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l88 0c8.8 0 16 7.2 16 16l0 88c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-27-27L401 273c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 55.7-55.7-27-27zM160 272a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 400c-39.8 0-73.2 27.2-82.6 64l218.6 0c-9.5-36.8-42.9-64-82.6-64l-53.3 0zm0-48l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
    </Icon>
);

export default ChartUser;