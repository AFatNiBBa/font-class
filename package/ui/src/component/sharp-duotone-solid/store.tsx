
import { Icon, generic } from "../../index";

/**
 * A component that renders the `store` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/store?s=sharp-duotone-solid store}
 * @preview ![store](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/store.svg)
 */
const Store: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 219.1c2.5 1 5.2 1.8 7.9 2.5s5.5 1.2 8.4 1.6c4 .5 8.1 .8 12.1 .8c12.8 0 24.8-2.7 35.6-7.5L128 384l320 0 0-167.5c5.4 2.4 11.1 4.3 17 5.5c3 .6 6 1.1 9 1.4s6.2 .5 9.4 .5c4.1 0 8.1-.3 12.1-.8c5.8-.8 11.3-2.2 16.5-4.1L512 384l0 128L64 512l0-128 0-164.9z" />
        <path d="M480 0l67.6 103.8c29.7 46.9 3.4 112-52.1 119.4c-4 .5-7.9 .8-12.1 .8c-26.1 0-49.2-11.4-65.2-29c-15.9 17.6-39 29-65.2 29c-26.1 0-49.3-11.4-65.2-29c-15.9 17.6-39 29-65.2 29c-26.1 0-49.3-11.4-65.2-29c-15.9 17.6-39.1 29-65.2 29c-4.1 0-8.2-.3-12.1-.8c-55.3-7.4-81.5-72.6-51.9-119.4L96 0 480 0z" />
    </Icon>
);

export default Store;