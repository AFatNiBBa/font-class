
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-columns` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-columns?s=duotone building-columns}
 * @preview ![building-columns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/building-columns.svg)
 */
const BuildingColumns: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 3.1 .4 6.2 1.4 9.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7c.9-3.1 1.4-6.2 1.4-9.3c0-10.5-5.2-20.6-14.2-26.6l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 192l-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 228.3c-.6 .3-1.2 .7-1.7 1.1l-48 32C5.2 459.4 0 469.5 0 480z" />
        <path d="M268.6 2.6c-8-3.4-17.2-3.4-25.2 0l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default BuildingColumns;