
import { Icon } from "../../index";

/**
 * A component that renders the `filters` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=light filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M231.1 32C209.5 32 192 49.5 192 71.1c0 9.7 3.6 19.1 10.2 26.3L352 262.2l0 97.7c0 10.2 4.9 19.9 13.2 25.9L445 443.8c3.8 2.7 8.3 4.2 13 4.2c12.2 0 22-9.9 22-22l0-163.8L629.8 97.4c6.5-7.2 10.2-16.6 10.2-26.3C640 49.5 622.5 32 600.9 32L231.1 32zM224 71.1c0-3.9 3.2-7.1 7.1-7.1l369.8 0c3.9 0 7.1 3.2 7.1 7.1c0 1.8-.7 3.5-1.8 4.8l-154 169.4c-2.7 2.9-4.2 6.8-4.2 10.8l0 150.4-64-46.5L384 256c0-4-1.5-7.8-4.2-10.8L225.8 75.8c-1.2-1.3-1.8-3-1.8-4.8zM164.5 96L39.1 96C17.5 96 0 113.5 0 135.1c0 9.7 3.6 19.1 10.2 26.3L160 326.2l0 65.7c0 10.2 4.9 19.9 13.2 25.9L253 475.8c3.8 2.7 8.3 4.2 13 4.2c12.2 0 22-9.9 22-22l0-131.8L320 291l0-16.4L305.8 259l-45.7 50.3c-2.7 2.9-4.2 6.8-4.2 10.8l0 118.4-64-46.5 0-71.9c0-4-1.5-7.8-4.2-10.8L33.8 139.8c-1.2-1.3-1.8-3-1.8-4.8c0-3.9 3.2-7.1 7.1-7.1l147.7 0-8.3-9.1c-6.1-6.7-10.8-14.5-14-22.9z" />
    </Icon>
);

export default Filters;