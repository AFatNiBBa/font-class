
import { Icon, generic } from "../../index";

/**
 * A component that renders the `narwhal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/narwhal?s=duotone narwhal}
 * @preview ![narwhal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/narwhal.svg)
 */
const Narwhal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 112l0 54.7c0 26.1 12.7 50.6 34.1 65.5L64 253.1 64 352c0 88.4 71.6 160 160 160l240 0c97.2 0 176-78.8 176-176c0-51.4-22.3-97.7-57.8-129.9c-18.7-17-41-30-65.6-37.8c-16.9-5.4-34.9-8.3-53.6-8.3c-50.9 0-100.7 17.5-140.2 49.6L154.1 346.8c-10.5 8.5-26.1 1.1-26.1-12.4l0-81.3 29.9-20.9c21.4-15 34.1-39.4 34.1-65.5l0-54.7c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5 25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112zM520 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M639.3 20.7c2.4-7.8-1.4-16.1-8.9-19.4s-16.2-.4-20.2 6.6L516.7 168.3c24.6 7.8 46.9 20.9 65.6 37.8l57-185.4zM496 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Narwhal;