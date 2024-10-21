
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=duotone reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M98.4 19.8c-5 12-2.2 25.7 6.9 34.9l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c6.1-6.1 9.4-14.3 9.4-22.6c0-4.1-.8-8.3-2.4-12.2C408.6 7.8 396.9 0 384 0L128 0c-12.9 0-24.6 7.8-29.6 19.8zm0 472.5c5 12 16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8c1.6-4 2.4-8.1 2.4-12.2c0-8.3-3.3-16.5-9.4-22.6l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9z" />
        <path d="M0 256c0-13.3 10.7-24 24-24l464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default ReflectVertical;